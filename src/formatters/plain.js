import _ from 'lodash';

const getValue = (data) => {
  if (_.isObject(data)) {
    return '[complex value]';
  }
  if (typeof data === 'string') {
    return `'${data}'`;
  }
  return data;
}

const getPlainDiff = (diff) => {
  const buildPlainLines = (data, parent = '') => {
    const callback = (node) => {
      switch (node.status) {
        case 'was added':
          return `Property '${parent}${node.name}' ${node.status} with value: ${getValue(node.value)}`;
        case 'was removed':
          return `Property '${parent}${node.name}' ${node.status}`;
        case 'unchanged':
          return '';
        case 'was updated':
          return `Property '${parent}${node.name}' ${node.status}. From ${getValue(node.value1)} to ${getValue(node.value2)}`;
        case 'nested':
          return buildPlainLines(node.childValue, `${parent}${node.name}.`);
      }
    }
    const lines = data.map(callback).filter((node) => node !== '');
    return lines.join('\n');
  }
  return buildPlainLines(diff);
}

export default getPlainDiff;