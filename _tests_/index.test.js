import fs from 'fs';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const file1path = './_fixtures_/file1.json';
const file2path = './_fixtures_/file2.json';
const expectedString = '{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}';

test('gendiff', () => {
  expect(genDiff(file1path, file2path)).toEqual(expectedString);
});
