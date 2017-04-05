import { task, watch, src, dest } from 'gulp';
import { ScriptTarget, ModuleKind } from 'typescript';
import * as path from 'path';

import {
  TABLE_DIST_ROOT,
  PROJECT_ROOT,
  TABLE_DIR,
  HTML_MINIFIER_OPTIONS,
  TABLE_LICENSE_BANNER,
} from '../constants';
import {
  sassBuildTask,
  tsBuildTask,
  execNodeTask,
  sequenceTask,
  triggerLivereload,
} from '../util/task_helpers';

// There are no type definitions available for these imports.
const inlineResources = require('../../../scripts/release/inline-resources');
const gulpRollup = require('gulp-better-rollup');
const gulpMinifyHtml = require('gulp-htmlmin');
const gulpIf = require('gulp-if');

/** Path to tsconfig file for the ng2-smart-table. */
const tsconfigPath = path.join(TABLE_DIR, 'tsconfig.json');

/** Asset files to be added to the components output. */
const assetFiles = [
  path.join(TABLE_DIR, '**/*.html'),
  path.join(TABLE_DIR, '**/*.scss'),
  path.join(TABLE_DIR, 'package.json'),
  path.join(PROJECT_ROOT, 'README.md'),
  path.join(PROJECT_ROOT, 'LICENSE.txt'),
];

/** Builds components to UMD bundle. */
task('build:table', [':build:table:bundle:umd']);

/** Builds components for ng2-smart-table releases */
task(':build:table:release', sequenceTask(
  ':build:table:bundle:umd',
  ':build:table:bundle:esm',
  ':build:table:ngc',
));

/** Builds components typescript in ES5, ES6 target. For specs Karma needs CJS output. */
task(':build:table:ts:es5', tsBuildTask(tsconfigPath, { target: ScriptTarget.ES5 }));
task(':build:table:ts:es6', tsBuildTask(tsconfigPath, { target: ScriptTarget.ES2015 }));
task(':build:table:ts:spec', tsBuildTask(tsconfigPath, {
  target: ScriptTarget.ES5, module: ModuleKind.CommonJS,
}));

/** Tasks to create a UMD or ES bundle */
task(':build:table:bundle:umd', sequenceTask(
  ':build:table:ts:es5', ':build:table:inline', ':build:table:rollup:umd',
));

task(':build:table:bundle:esm', sequenceTask(
  ':build:table:ts:es6', ':build:table:inline', ':build:table:rollup:esm',
));

/** Copies all component assets to the build output. */
task(':build:table:assets', () => {
  return src(assetFiles)
    .pipe(gulpIf(/.html$/, gulpMinifyHtml(HTML_MINIFIER_OPTIONS)))
    .pipe(dest(TABLE_DIST_ROOT));
});

/** Compiles the components SCSS into minified CSS. */
task(':build:table:scss', sassBuildTask(TABLE_DIST_ROOT, TABLE_DIR, true));

/** Builds a ES6 bundle for all components. */
task(':build:table:rollup:esm', () => {
  return src(path.join(TABLE_DIST_ROOT, 'index.js'))
    .pipe(createRollupBundle('es', 'table.js'))
    .pipe(dest(path.join(TABLE_DIST_ROOT, 'bundles')));
});

/** Builds a UMD bundle (ES5) for all components. */
task(':build:table:rollup:umd', () => {
  return src(path.join(TABLE_DIST_ROOT, 'index.js'))
    .pipe(createRollupBundle('umd', 'table.umd.js'))
    .pipe(dest(path.join(TABLE_DIST_ROOT, 'bundles')));
});


/** Builds components with resources (html, css) inlined into the built JS. */
task(':build:table:inline', sequenceTask(
  [':build:table:scss', ':build:table:assets'],
  ':inline-resources',
));

/** Inlines resources (html, css) into the JS output. */
task(':inline-resources', () => inlineResources(TABLE_DIST_ROOT));

/** Generates metadata.json files for all of the components. */
task(':build:table:ngc', ['build:table'], execNodeTask(
  '@angular/compiler-cli', 'ngc', ['-p', tsconfigPath],
));

/** [Watch task] Rebuilds (ESM output) whenever ts, scss, or html sources change. */
task(':watch:table', () => {
  watch(path.join(TABLE_DIR, '**/*.ts'), ['build:table', triggerLivereload]);
  watch(path.join(TABLE_DIR, '**/*.scss'), ['build:table', triggerLivereload]);
  watch(path.join(TABLE_DIR, '**/*.html'), ['build:table', triggerLivereload]);
});

const ROLLUP_GLOBALS = {
  // Angular dependencies
  '@angular/core': 'ng.core',
  '@angular/common': 'ng.common',
  '@angular/forms': 'ng.forms',
  '@angular/router': 'ng.router',
  '@angular/http': 'ng.http',
  '@angular/animations': 'ng.animations',
  '@angular/animations/browser': 'ng.animations.browser',
  '@angular/platform-browser': 'ng.platformBrowser',
  '@angular/platform-browser/animations': 'ng.platformBrowser.animations',
  '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',

  // Rxjs dependencies
  'rxjs/Subject': 'Rx',
  'rxjs/add/observable/fromEvent': 'Rx.Observable',
  'rxjs/add/observable/forkJoin': 'Rx.Observable',
  'rxjs/add/observable/of': 'Rx.Observable',
  'rxjs/add/observable/merge': 'Rx.Observable',
  'rxjs/add/observable/throw': 'Rx.Observable',
  'rxjs/add/operator/auditTime': 'Rx.Observable.prototype',
  'rxjs/add/operator/toPromise': 'Rx.Observable.prototype',
  'rxjs/add/operator/map': 'Rx.Observable.prototype',
  'rxjs/add/operator/filter': 'Rx.Observable.prototype',
  'rxjs/add/operator/do': 'Rx.Observable.prototype',
  'rxjs/add/operator/share': 'Rx.Observable.prototype',
  'rxjs/add/operator/finally': 'Rx.Observable.prototype',
  'rxjs/add/operator/catch': 'Rx.Observable.prototype',
  'rxjs/add/operator/first': 'Rx.Observable.prototype',
  'rxjs/add/operator/startWith': 'Rx.Observable.prototype',
  'rxjs/add/operator/switchMap': 'Rx.Observable.prototype',
  'rxjs/add/operator/debounceTime': 'Rx.Observable.prototype',
  'rxjs/add/operator/distinctUntilChanged': 'Rx.Observable.prototype',
  'rxjs/Observable': 'Rx',

  // 3rd party dependencies
  'ng2-completer': 'ng2completer',
  'lodash': 'lodash',
};

/** Creates a rollup bundles of the ng2-smart-table components.*/
function createRollupBundle(format: string, outFile: string) {
  const rollupOptions = {
    context: 'this',
    external: Object.keys(ROLLUP_GLOBALS),
  };

  const rollupGenerateOptions = {
    // Keep the moduleId empty because we don't want to force developers to a specific moduleId.
    moduleId: '',
    moduleName: 'ng2-smart-table',
    banner: TABLE_LICENSE_BANNER,
    format: format,
    dest: outFile,
    globals: ROLLUP_GLOBALS,
  };

  return gulpRollup(rollupOptions, rollupGenerateOptions);
}
