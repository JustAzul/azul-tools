interface cache {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [Key: string]: any
}

const Temp: cache = {};
const Timeouts: cache = {};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
function _Set(KeyID: string, Value: any, Expiration: number): void {
    Temp[KeyID] = Value;
    
    clearTimeout(Timeouts[KeyID]);
    delete Timeouts[KeyID];
    
    Timeouts[KeyID] = setTimeout(() => {
        delete Temp[KeyID];
        delete Timeouts[KeyID];
        global?.gc();
    }, Expiration);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Get(KeyID: string): any | undefined {
    if (Object.prototype.hasOwnProperty.call(Temp, KeyID)) return Temp[KeyID];
    return undefined;
}

export default {
    Get,
    Set: _Set
};