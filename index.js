const Log = require('./components/Logger.js');
const AzulFileStore = require('./components/FileStore.js');
const AzulHelper = require('azul-helper');
const Tester = require('./components/Tester.js');
const Cache = require('./components/Cache.js');

module.exports = {
    Log: Log,
    ...AzulFileStore,
    ...AzulHelper,
    Cache: Cache,
    Tester: Tester
}