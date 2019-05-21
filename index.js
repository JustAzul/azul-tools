const Log = require('./components/Logger.js');
const fs = require('./components/FileStore.js');
const helper = require('azul-helper');
const Tester = require('./components/Tester.js');

module.exports = {
    Log: Log,
    storeFile: fs.storeFile,
    storeChatData: fs.storeChatData,
    readJSON: helper.readJSON,
    sleep: helper.sleep,
    TimeStamp: helper.TimeStamp,
    isURL: helper.isURL,
    isTradeOfferURL: helper.isTradeOfferURL,
    GetSteamID64FromURL: helper.GetSteamID64FromURL,
    isSteamID64: helper.isSteamID64,
    formatNumber: helper.formatNumber,
    Tester: Tester
}