import fs from 'fs';
import path from 'path';
import getDiffList from './getDiffList.js';
import parser from './parsers.js'

const readContent = (filepath) => {
  const workPath = path.resolve(process.cwd(), filepath);
  return fs.readFileSync(workPath);
};

const getData = (filePath) => {
  const data = readContent(filePath);
  const extention = path.extname(filePath);
  return parser(data, extention);
}

const genDiff = (filePath1, filePath2) => {
  const data1 = getData(filePath1);
  const data2 = getData(filePath2);
  return getDiffList(data1, data2);
};

export default genDiff;
