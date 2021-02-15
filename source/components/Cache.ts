interface cache {
    [Key: string]: any
}

let Temp: cache = {};
let Timeouts: cache = {};

function _Set(KeyID: string, Value: any, Expiration: number) {
    Temp[KeyID] = Value;
    
    clearTimeout(Timeouts[KeyID]);
    delete Timeouts[KeyID];
    
    Timeouts[KeyID] = setTimeout(() => {
        delete Temp[KeyID];
        delete Timeouts[KeyID];
        global?.gc();
    }, Expiration);
}

function Get(KeyID: string) {
    if (Temp.hasOwnProperty(KeyID)) return Temp[KeyID];
    return undefined;
}

export default {
    Get,
    Set: _Set
};