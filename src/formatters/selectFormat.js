import getStylishDiff from './stylish.js';

const selectFormat = (diff, format = 'stylish') => {
  switch (format) {
    case 'stylish':
      return getStylishDiff(diff);
    default:
      throw new Error (`format ${format} is not correct!`);
  }
};

export default selectFormat;