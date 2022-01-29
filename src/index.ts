import figlet from 'figlet';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Helper from './components/Helper';
import Log from './components/Logger';
// eslint-disable-next-line import/no-unresolved, import/extensions
import storeChatData from './components/storeChatData';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Cache from './components/Cache';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const colour = require('colour');

function Pattern(): void {
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
