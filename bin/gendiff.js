#!/usr/bin/env node

import { program } from 'commander';

program
  .description('display a differens of two configuration files')
  .version('1.0.0', '-V, --version', 'display version')
  .option('-f, --format [type]', 'format of display')
  .argument('first_filepath, second_filepath')

program.parse();
