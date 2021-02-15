"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Temp = {};
let Timeouts = {};
function _Set(KeyID, Value, Expiration) {
    Temp[KeyID] = Value;
    clearTimeout(Timeouts[KeyID]);
    delete Timeouts[KeyID];
    Timeouts[KeyID] = setTimeout(() => {
        delete Temp[KeyID];
        delete Timeouts[KeyID];
        global === null || global === void 0 ? void 0 : global.gc();
    }, Expiration);
}
function Get(KeyID) {
    if (Temp.hasOwnProperty(KeyID))
        return Temp[KeyID];
    return undefined;
}
exports.default = {
    Get,
    Set: _Set
};
