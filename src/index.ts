import Helper from 'azul-helper';
import { duration } from 'moment';
import Log from './components/Logger';
// eslint-disable-next-line import/no-unresolved, import/extensions
import storeChatData from './components/storeChatData';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Cache from './components/Cache';

let Graphic: string | null;
let Timer: any;

function SetupPattern(newGraphic: string) {
  Graphic = newGraphic;
  Timer = setTimeout(() => { Graphic = null; }, duration(5, 'minutes').asMilliseconds());
}

function Pattern(Clear: boolean = true) {
  // eslint-disable-next-line no-console
  console.log(Graphic);
  if (Clear) {
    Graphic = null;
    clearTimeout(Timer);
  }
}

export default {
  Log,
  storeChatData,
  Cache,
  ...Helper,
  SetupPattern,
  Pattern,
};
