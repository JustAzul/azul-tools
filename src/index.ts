import Helper from 'azul-helper';
import fs from 'fs';
import Log from './components/Logger';
// eslint-disable-next-line import/no-unresolved, import/extensions
import storeChatData from './components/storeChatData';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Cache from './components/Cache';

function Pattern() {
  const encoding = 'utf-8';
  const Filedir = fs.existsSync('./Pattern.txt') ? './Pattern.txt' : '../Pattern.txt';
  const Graphic = fs.readFileSync(Filedir, { encoding });
  // eslint-disable-next-line no-console
  console.log(Graphic);
}

export default {
  Log,
  storeChatData,
  Cache,
  ...Helper,
  Pattern,
};
