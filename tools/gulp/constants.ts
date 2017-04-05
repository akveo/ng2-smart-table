import { join } from 'path';

export const TABLE_VERSION = require('../../src/ng2-smart-table/package.json').version;

export const PROJECT_ROOT = join(__dirname, '../..');
export const SOURCE_ROOT = join(PROJECT_ROOT, 'src');

export const DIST_ROOT = join(PROJECT_ROOT, 'dist');
export const TABLE_DIST_ROOT = join(DIST_ROOT, 'ng2-smart-table');

export const HTML_MINIFIER_OPTIONS = {
  collapseWhitespace: true,
  removeComments: true,
  caseSensitive: true,
  removeAttributeQuotes: false,
};

export const TABLE_LICENSE_BANNER = `/**
  * @license ng2-smart-table v${TABLE_VERSION}
  * Copyright (c) 2017 Akveo. https://akveo.github.io/ng2-smart-table/
  * License: MIT
  */`;

export const TABLE_DIR = join(SOURCE_ROOT, 'ng2-smart-table');
