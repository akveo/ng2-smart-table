#!/bin/bash

npm run build
npm run release
cd dist/ng2-smart-table
npm pack