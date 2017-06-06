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
    'rxjs/AnonymousSubject':      'Rx',
    'rxjs/AsyncSubject':          'Rx',
    'rxjs/BehaviorSubject':       'Rx',
    'rxjs/Notifiction':           'Rx',
    'rxjs/ObservableInput':       'Rx',
    'rxjs/Observable':            'Rx',
    'rxjs/Observer':              'Rx',
    'rxjs/Scheduler':             'Rx',
    'rxjs/Subject':               'Rx',
    'rxjs/SubjectSubscriber':     'Rx',
    'rxjs/SubscribableOrPromise': 'Rx',
    'rxjs/Subscriber':            'Rx',
    'rxjs/Subscription':          'Rx',
    'rxjs/TeardownLogic':         'Rx',
    'rxjs/add/observable/fromPromise':      'Rx.Observable',
    'rxjs/add/observable/of':               'Rx.Observable',
    'rxjs/add/observable/bindCallback':     'Rx.Observable',
    'rxjs/add/observable/bindNodeCallback': 'Rx.Observable',
    'rxjs/add/observable/combineLatest':    'Rx.Observable',
    'rxjs/add/observable/concat':           'Rx.Observable',
    'rxjs/add/observable/create':           'Rx.Observable',
    'rxjs/add/observable/defer':            'Rx.Observable',
    'rxjs/add/observable/empty':            'Rx.Observable',
    'rxjs/add/observable/forkJoin':         'Rx.Observable',
    'rxjs/add/observable/from':             'Rx.Observable',
    'rxjs/add/observable/fromEvent':        'Rx.Observable',
    'rxjs/add/observable/fromEventPattern': 'Rx.Observable',
    'rxjs/add/observable/interval':         'Rx.Observable',
    'rxjs/add/observable/merge':            'Rx.Observable',
    'rxjs/add/observable/never':            'Rx.Observable',
    'rxjs/add/observable/range':            'Rx.Observable',
    'rxjs/add/observable/throw':            'Rx.Observable',
    'rxjs/add/observable/timer':            'Rx.Observable',
    'rxjs/add/observable/webSocket':        'Rx.Observable',
    'rxjs/add/observable/zip':              'Rx.Observable',
    'rxjs/add/operator/audit':          'Rx.Observable.prototype',
    'rxjs/add/operator/auditTime':      'Rx.Observable.prototype',
    'rxjs/add/operator/buffer':         'Rx.Observable.prototype',
    'rxjs/add/operator/bufferCount':    'Rx.Observable.prototype',
    'rxjs/add/operator/bufferTime':     'Rx.Observable.prototype',
    'rxjs/add/operator/bufferToggle':   'Rx.Observable.prototype',
    'rxjs/add/operator/bufferWhen':     'Rx.Observable.prototype',
    'rxjs/add/operator/catch':          'Rx.Observable.prototype',
    'rxjs/add/operator/combineAll':     'Rx.Observable.prototype',
    'rxjs/add/operator/combineLatest':  'Rx.Observable.prototype',
    'rxjs/add/operator/concat':         'Rx.Observable.prototype',
    'rxjs/add/operator/concatAll':      'Rx.Observable.prototype',
    'rxjs/add/operator/concatMap':      'Rx.Observable.prototype',
    'rxjs/add/operator/concatMapTo':    'Rx.Observable.prototype',
    'rxjs/add/operator/count':          'Rx.Observable.prototype',
    'rxjs/add/operator/debounce':       'Rx.Observable.prototype',
    'rxjs/add/operator/debounceTime':   'Rx.Observable.prototype',
    'rxjs/add/operator/defaultIfEmpty': 'Rx.Observable.prototype',
    'rxjs/add/operator/delay':          'Rx.Observable.prototype',
    'rxjs/add/operator/delayWhen':      'Rx.Observable.prototype',
    'rxjs/add/operator/dematerialize':  'Rx.Observable.prototype',
    'rxjs/add/operator/distinct':       'Rx.Observable.prototype',
    'rxjs/add/operator/distinctUntilChanged':     'Rx.Observable.prototype',
    'rxjs/add/operator/distinctUntilKeyChanged':  'Rx.Observable.prototype',
    'rxjs/add/operator/do':             'Rx.Observable.prototype',
    'rxjs/add/operator/elementAt':      'Rx.Observable.prototype',
    'rxjs/add/operator/every':          'Rx.Observable.prototype',
    'rxjs/add/operator/exhaust':        'Rx.Observable.prototype',
    'rxjs/add/operator/exhaustMap':     'Rx.Observable.prototype',
    'rxjs/add/operator/expand':         'Rx.Observable.prototype',
    'rxjs/add/operator/filter':         'Rx.Observable.prototype',
    'rxjs/add/operator/find':           'Rx.Observable.prototype',
    'rxjs/add/operator/findIndex':      'Rx.Observable.prototype',
    'rxjs/add/operator/first':          'Rx.Observable.prototype',
    'rxjs/add/operator/forEach':        'Rx.Observable.prototype',
    'rxjs/add/operator/finally':        'Rx.Observable.prototype',
    'rxjs/add/operator/groupBy':        'Rx.Observable.prototype',
    'rxjs/add/operator/ignoreElements': 'Rx.Observable.prototype',
    'rxjs/add/operator/isEmpty':        'Rx.Observable.prototype',
    'rxjs/add/operator/last':           'Rx.Observable.prototype',
    'rxjs/add/operator/letProto':       'Rx.Observable.prototype',
    'rxjs/add/operator/lift':           'Rx.Observable.prototype',
    'rxjs/add/operator/map':            'Rx.Observable.prototype',
    'rxjs/add/operator/materialize':    'Rx.Observable.prototype',
    'rxjs/add/operator/max':            'Rx.Observable.prototype',
    'rxjs/add/operator/merge':          'Rx.Observable.prototype',
    'rxjs/add/operator/mergeAll':       'Rx.Observable.prototype',
    'rxjs/add/operator/mergeMap':       'Rx.Observable.prototype',
    'rxjs/add/operator/mergeMapTo':     'Rx.Observable.prototype',
    'rxjs/add/operator/mergeScan':      'Rx.Observable.prototype',
    'rxjs/add/operator/min':            'Rx.Observable.prototype',
    'rxjs/add/operator/multicast':      'Rx.Observable.prototype',
    'rxjs/add/operator/observeOn':      'Rx.Observable.prototype',
    'rxjs/add/operator/pairwise':       'Rx.Observable.prototype',
    'rxjs/add/operator/partition':      'Rx.Observable.prototype',
    'rxjs/add/operator/pluck':          'Rx.Observable.prototype',
    'rxjs/add/operator/publish':        'Rx.Observable.prototype',
    'rxjs/add/operator/publishBehavior':'Rx.Observable.prototype',
    'rxjs/add/operator/publishLast':    'Rx.Observable.prototype',
    'rxjs/add/operator/publishReplay':  'Rx.Observable.prototype',
    'rxjs/add/operator/race':           'Rx.Observable.prototype',
    'rxjs/add/operator/reduce':         'Rx.Observable.prototype',
    'rxjs/add/operator/repeat':         'Rx.Observable.prototype',
    'rxjs/add/operator/repeatWhen':     'Rx.Observable.prototype',
    'rxjs/add/operator/retry':          'Rx.Observable.prototype',
    'rxjs/add/operator/retryWhen':      'Rx.Observable.prototype',
    'rxjs/add/operator/sample':         'Rx.Observable.prototype',
    'rxjs/add/operator/sampleTime':     'Rx.Observable.prototype',
    'rxjs/add/operator/scan':           'Rx.Observable.prototype',
    'rxjs/add/operator/sequenceEqual':  'Rx.Observable.prototype',
    'rxjs/add/operator/share':          'Rx.Observable.prototype',
    'rxjs/add/operator/single':         'Rx.Observable.prototype',
    'rxjs/add/operator/skip':           'Rx.Observable.prototype',
    'rxjs/add/operator/skipUntil':      'Rx.Observable.prototype',
    'rxjs/add/operator/skipWhile':      'Rx.Observable.prototype',
    'rxjs/add/operator/startWith':      'Rx.Observable.prototype',
    'rxjs/add/operator/subscribeOn':    'Rx.Observable.prototype',
    'rxjs/add/operator/switch':         'Rx.Observable.prototype',
    'rxjs/add/operator/switchMap':      'Rx.Observable.prototype',
    'rxjs/add/operator/switchMapTo':    'Rx.Observable.prototype',
    'rxjs/add/operator/take':           'Rx.Observable.prototype',
    'rxjs/add/operator/takeLast':       'Rx.Observable.prototype',
    'rxjs/add/operator/takeUntil':      'Rx.Observable.prototype',
    'rxjs/add/operator/takeWhile':      'Rx.Observable.prototype',
    'rxjs/add/operator/throttle':       'Rx.Observable.prototype',
    'rxjs/add/operator/throttleTime':   'Rx.Observable.prototype',
    'rxjs/add/operator/timeInterval':   'Rx.Observable.prototype',
    'rxjs/add/operator/timeout':        'Rx.Observable.prototype',
    'rxjs/add/operator/timeoutWith':    'Rx.Observable.prototype',
    'rxjs/add/operator/timestamp':      'Rx.Observable.prototype',
    'rxjs/add/operator/toArray':        'Rx.Observable.prototype',
    'rxjs/add/operator/toPromise':      'Rx.Observable.prototype',
    'rxjs/add/operator/window':         'Rx.Observable.prototype',
    'rxjs/add/operator/windowCount':    'Rx.Observable.prototype',
    'rxjs/add/operator/windowToggle':   'Rx.Observable.prototype',
    'rxjs/add/operator/windowWhen':     'Rx.Observable.prototype',
    'rxjs/add/operator/withLatestFrom': 'Rx.Observable.prototype',
    'rxjs/add/operator/zipAll':         'Rx.Observable.prototype',
    'rxjs/add/operator/zipProto':       'Rx.Observable.prototype',

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
