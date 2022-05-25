import _ from 'lodash';

const getIdent = (depth) => '  '.repeat(depth);

const getStringValue = (data, depth = 0) => {
  if (!_.isObject(data)) {
    return data;
  }
  const linesArray = Object.keys(data).map((node) => `${getIdent(depth + 2)}  ${node}: ${getStringValue(data[node], depth + 2)}`);
  return `{\n${linesArray.join('\n')}\n${getIdent(depth + 1)}}`;
}

const getStylishDiff = (diff) => {
  const iter = (tree, depth) => tree.map((node) => {
    const genLine = (value, sign) => `${getIdent(depth)}${sign} ${node.name}: ${getStringValue(value, depth)}\n`;

    switch (node.status) {
      case 'was removed':
        return genLine(node.value, '-');
      case 'was added':
        return genLine(node.value, '+');
      case 'nested':
        return `${getIdent(depth)}  ${node.name}: {\n${iter(node.childValue, depth + 2).join('')}${getIdent(depth)}  }\n`;
      case 'was updated':
        return `${genLine(node.value1, '-')}${genLine(node.value2, '+')}`;
      case 'unchanged':
        return genLine(node.value, ' ');  
    }
  });

  return `{\n${iter(diff, 1).join('')}}`;
};

export default getStylishDiff;