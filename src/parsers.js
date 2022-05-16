import yaml from 'js-yaml';

const parser = (data, fileExtention) => {
  if ((fileExtention === '.yml') || (fileExtention === '.yaml')) {
    return yaml.load(data);
  }

  if (fileExtention === '.json') {
    return JSON.parse(data);
  }

  throw new Error ('uncorrect type of file');
}

export default parser;
