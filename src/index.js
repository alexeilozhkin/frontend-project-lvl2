import fs from 'fs';
import path from 'path';
import getDiffList from './getDiffList.js';

const readContentPath = (filepath) => {
  const workPath = path.resolve(process.cwd(), filepath);
  return fs.readFileSync(workPath);
};

const genDiff = (filePath1, filePath2) => {
  const contentPath1 = readContentPath(filePath1);
  const contentPath2 = readContentPath(filePath2);
  const data1 = JSON.parse(contentPath1);
  const data2 = JSON.parse(contentPath2);
  return getDiffList(data1, data2);
};

export default genDiff;
