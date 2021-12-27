import figlet from 'figlet';
import Helper from 'azul-helper';
import Log from './components/Logger';
// eslint-disable-next-line import/no-unresolved, import/extensions
import storeChatData from './components/storeChatData';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Cache from './components/Cache';

const colour = require('colour');

function Pattern() {
  const o = {
    horizontalLayout: 'full',
    verticalLayout: 'full',
  };

  // @ts-expect-error im lazy and im not adding this type
  const text = figlet.textSync('Justazul.com', o);
  // eslint-disable-next-line no-console
  console.log(colour.cyan(text));
}

export default {
  Log,
  storeChatData,
  Cache,
  ...Helper,
  Pattern,
};
