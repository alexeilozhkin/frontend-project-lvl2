import fs from 'fs';
import path from 'path';

const buildContent = (filepath) => {
  const workPath = path.resolve(process.cwd(), filepath);
  return fs.readFileSync(workPath, 'utf-8');
};

export default buildContent;
