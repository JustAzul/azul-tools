import type { cache, timeouts } from '../..';

const Temp: cache = {};
const Timeouts: timeouts = {};

// eslint-disable-next-line max-len
function SetCache(KeyID: string, Value: unknown, Expiration: number): void {
  Temp[KeyID] = Value;

  clearTimeout(Timeouts[KeyID]);
  delete Timeouts[KeyID];

  Timeouts[KeyID] = setTimeout(() => {
    delete Temp[KeyID];
    delete Timeouts[KeyID];

    if (global.gc && typeof global.gc ==='function') {
      global?.gc();
    }
  }, Expiration);
}

function Get(KeyID: string): unknown | undefined {
  if (Object.prototype.hasOwnProperty.call(Temp, KeyID)) return Temp[KeyID];
  return undefined;
}

export default {
  Get,
  Set: SetCache,
};
