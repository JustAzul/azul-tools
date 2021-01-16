let Temp = {};
let Timeouts = {};

async function Set(KeyID = "", Value, Expiration) {
    Temp[KeyID] = Value;
    clearTimeout(Timeouts[KeyID]);
    delete Timeouts[KeyID];
    Timeouts[KeyID] = setTimeout(() => {delete Temp[KeyID];delete Timeouts[KeyID];}, Expiration);
}

async function Get(KeyID = "") {
    if (Temp.hasOwnProperty(KeyID)) return Temp[KeyID];
    return undefined;
}

module.exports = {
    Get: Get,
    Set: Set
};