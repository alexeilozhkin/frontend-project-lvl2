import path from 'path';
import getDiffList from './getDiffList.js';
import parser from './parsers.js'
import buildContent from './buildContent.js';
import selectFormat from './formatters/selectFormat.js';


const getData = (filePath) => {
  const data = buildContent(filePath);
  const extention = path.extname(filePath);
  return parser(data, extention);
}

const genDiff = (filePath1, filePath2, format) => {
  const diffList =  getDiffList(getData(filePath1), getData(filePath2));
  return selectFormat(diffList, format);
};

export default genDiff;
