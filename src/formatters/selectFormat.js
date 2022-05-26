import _ from 'lodash';
import getStylishDiff from './stylish.js';
import getPlainDiff from './plain.js';

const selectFormat = (diff, format = 'stylish') => {
  switch (format) {
    case 'stylish':
      return getStylishDiff(diff);
    case 'plain':
      return getPlainDiff(diff);
    case 'json':
      return JSON.stringify(diff);
    default:
      throw new Error (`format ${format} is not correct!`);
  }
};

export default selectFormat;