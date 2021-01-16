const Log = require('./components/Logger.js');
const {storeFile, storeChatData} = require('./components/FileStore.js');
const {readJSON, sleep, TimeStamp, isURL, isTradeOfferURL, GetSteamID64FromURL, isSteamID64, isValidSteamID, formatNumber, SplitArray} = require('azul-helper');
const Tester = require('./components/Tester.js');
const Cache = require('./components/Cache.js');

module.exports = {
    Log: Log,
    storeFile: storeFile,
    storeChatData: storeChatData,
    readJSON: readJSON,
    sleep: sleep,
    TimeStamp: TimeStamp,
    isURL: isURL,
    isTradeOfferURL: isTradeOfferURL,
    GetSteamID64FromURL: GetSteamID64FromURL,
    isSteamID64: isSteamID64,
    isValidSteamID: isValidSteamID,
    formatNumber: formatNumber,
    SplitArray: SplitArray,
    Cache: Cache,
    Tester: Tester
}