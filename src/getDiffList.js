import _ from 'lodash';

const getDiffList = (data1, data2) => {
  const keysOfObjects = Object.keys({ ...data1, ...data2 });
  const sortedKeys = _.sortBy(keysOfObjects);
  const list = sortedKeys.flatMap((node) => {
    if (!_.has(data2, node)) {
      return { name: node, status: 'was removed', value: data1[node] };
    }
    if (!_.has(data1, node)) {
      return { name: node, status: 'was added', value: data2[node] };
    }
    if (_.isObject(data1[node]) && _.isObject(data2[node])) {
      return { name: node, status: 'nested', childValue: getDiffList(data1[node], data2[node]) };
    }
    if (data1[node] !== data2[node]) {
      return { name: node, status: 'was updated', value1: data1[node], value2: data2[node] };
    }
    return { name: node, status: 'unchanged', value: data1[node] };
  })
  return list;
};

export default getDiffList;
