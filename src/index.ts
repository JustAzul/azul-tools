import Helper from 'azul-helper';
import Path from 'path';
import { readFileSync, existsSync } from 'fs';
import Log from './components/Logger';
// eslint-disable-next-line import/no-unresolved, import/extensions
import storeChatData from './components/storeChatData';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Cache from './components/Cache';

const colour = require('colour');

function Pattern() {
  const encoding = 'utf-8';
  const FilePath = existsSync(Path.join(__dirname, '../', 'Pattern.txt')) ? Path.join(__dirname, '../', 'Pattern.txt') : Path.join(__dirname, './', 'Pattern.txt');
  const TextGraphic = readFileSync(FilePath, { encoding });
  // eslint-disable-next-line no-console
  console.log(colour.cyan(TextGraphic));
}

export default {
  Log,
  storeChatData,
  Cache,
  ...Helper,
  Pattern,
};
