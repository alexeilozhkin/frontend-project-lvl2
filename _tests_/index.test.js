import genDiff from '../src/index.js';
import fs from 'fs';

const file1Path = './_fixtures_/file1.json';
const file2Path = './_fixtures_/file2.json';
const file3Path = './_fixtures_/file3.yaml';
const file4Path = './_fixtures_/file4.yaml';
const stylishPath = '_fixtures_/expectedStylish.txt'

const stylishResult = fs.readFileSync(stylishPath, 'utf-8');


test('gendiff JSON', () => {
  expect(genDiff(file1Path, file2Path)).toBe(stylishResult);
});

test('genDiff YAML', () => {
  expect(genDiff(file3Path, file4Path)).toBe(stylishResult);
});
