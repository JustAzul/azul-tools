interface cache {
    [Key: string]: unknown;
}
interface timeouts {
    [Key: string]: NodeJS.Timeout
}

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
    global?.gc();
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
