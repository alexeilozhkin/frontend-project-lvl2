import genDiff from '../src/index.js';

const file1Path = './_fixtures_/file1.json';
const file2Path = './_fixtures_/file2.json';
const expectedString = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('gendiff', () => {
  expect(genDiff(file1Path, file2Path)).toBe(expectedString);
});
