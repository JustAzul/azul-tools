const {
  Log, LogError, Trade, Warn, Debug,
// eslint-disable-next-line import/no-unresolved, import/extensions
} = require('./source');

module.exports = Log;
module.exports.Error = LogError;
module.exports.Trade = Trade;
module.exports.Warn = Warn;
module.exports.Debug = Debug;
