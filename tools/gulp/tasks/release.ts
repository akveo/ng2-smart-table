import { task } from 'gulp';
import gulpRunSequence = require('run-sequence');

import { cleanTask } from '../util/task_helpers';

/** Removes redundant spec files from the release. TypeScript creates definition files for specs. */
// TODO(devversion): tsconfig files should share code and don't generate spec files for releases.
task(':build:release:clean-spec', cleanTask('dist/**/*+(-|.)spec.*'));

task('build:release', function (done: () => void) {
  // Synchronously run those tasks.
  gulpRunSequence(
    'clean',
    ':build:table:release',
    ':build:release:clean-spec',
    done,
  );
});
