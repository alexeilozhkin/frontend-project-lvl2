import _ from 'lodash';

const addLine = (object, key, sign) => {
  if (_.has(object, key)) {
    return `  ${sign} ${key}: ${object[key]}\n`;
  }
  return '';
};

const getDiffList = (data1, data2) => {
  const keysOfObjects = Object.keys({ ...data1, ...data2 });
  const sortedKeys = _.sortBy(keysOfObjects);
  const list = sortedKeys.map((key) => {
    if (data1[key] === data2[key]) {
      return `${addLine(data1, key, ' ')}`;
    }
    return `${addLine(data1, key, '-')}${addLine(data2, key, '+')}`;
  });
  return `{\n${list.join('')}}`;
};

export default getDiffList;
