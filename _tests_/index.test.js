import genDiff from '../src/index.js';
import fs from 'fs';

const file1Path = './_fixtures_/file1.json';
const file2Path = './_fixtures_/file2.json';
const file3Path = './_fixtures_/file3.yaml';
const file4Path = './_fixtures_/file4.yaml';
const stylishPath = './_fixtures_/expectedStylish.txt';
const plainPath = './_fixtures_/expectedPlain.txt';
const jsonPath = './_fixtures_/expectedJSON.txt';

const stylishResult = fs.readFileSync(stylishPath, 'utf-8');
const plainResult = fs.readFileSync(plainPath, 'utf-8');
const jsonResult = fs.readFileSync(jsonPath, 'utf-8');


test('gendiff stylish JSON', () => {
  expect(genDiff(file1Path, file2Path)).toBe(stylishResult);
});

test('gendiff stylish YAML', () => {
  expect(genDiff(file3Path, file4Path)).toBe(stylishResult);
});

test('gendiff plain JSON', () => {
  expect(genDiff(file1Path, file2Path, 'plain')).toBe(plainResult);
});

test('gendiff plain YAML', () => {
  expect(genDiff(file3Path, file4Path, 'plain')).toBe(plainResult);
});

test('gendiff json JSON', () => {
  expect(genDiff(file1Path, file2Path, 'json')).toBe(jsonResult);
});

test('gendiff json YAML', () => {
  expect(genDiff(file3Path, file4Path, 'json')).toBe(jsonResult);
});