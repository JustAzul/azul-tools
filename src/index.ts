/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import figlet from 'figlet';
import Helper from './components/Helper';
import Log from './components/Logger';
import storeChatData from './components/storeChatData';
import Cache from './components/Cache';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const colour = require('colour');

function Pattern(): void {
  const o: figlet.Options = {
    horizontalLayout: 'full',
    verticalLayout: 'full',
  };

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
