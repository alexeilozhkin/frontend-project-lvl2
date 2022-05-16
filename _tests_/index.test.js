import genDiff from '../src/index.js';

const file1Path = './_fixtures_/file1.json';
const file2Path = './_fixtures_/file2.json';
const file3Path = './_fixtures_/file3.yaml';
const file4Path = './_fixtures_/file4.yaml';
const expectedString = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('gendiff JSON', () => {
  expect(genDiff(file1Path, file2Path)).toBe(expectedString);
});

test('genDiff YAML', () => {
  expect(genDiff(file3Path, file4Path)).toBe(expectedString);
});
