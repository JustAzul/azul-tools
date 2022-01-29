"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = exports.LogError = exports.Debug = exports.Trade = exports.Warn = void 0;
const os_1 = require("os");
const Helper_1 = __importDefault(require("../Helper"));
const colour = require('colour');
async function storeLogData(logData, type, BaseDir = 'history') {
    const ts = await Helper_1.default.TimeStamp();
    const file = `${BaseDir}/${type}/${ts.Date}.log`;
    Helper_1.default.storeFile(file, logData + os_1.EOL, 'a');
}
async function RawLog(log, type = 'info', json = false, DebugMode = true) {
    const Label = type.toUpperCase();
    const LogType = type === 'warn' ? 'info' : type;
    const ts = await Helper_1.default.TimeStamp();
    const time = ts.Time;
    const datetime = `${ts.Date} ${time}`;
    const LogText = json
        ? JSON.stringify(log)
        : log;
    const text = `${datetime} ${Label}${(type === 'info' || type === 'warn') ? ' ' : ''} => ${LogText}`;
    const logText = `${time}: ${LogText}`;
    storeLogData(logText, LogType);
    if (type === 'debug' && !DebugMode)
        return;
    let message;
    switch (type) {
        default:
        case 'info':
            message = colour.cyan(text);
            break;
        case 'warn':
            message = colour.yellow(text);
            console.warn(message);
            return;
        case 'trade':
            message = colour.green(text);
            break;
        case 'debug':
            message = colour.grey(text);
            console.debug(message);
            return;
        case 'error':
            message = colour.red(text);
            console.error(message);
            return;
    }
    console.log(message);
}
const Warn = (log) => RawLog(log, 'warn');
exports.Warn = Warn;
const Trade = (log) => RawLog(log, 'trade');
exports.Trade = Trade;
const Debug = (log, json = false, DebugMode = true) => RawLog(log, 'debug', json, DebugMode);
exports.Debug = Debug;
const LogError = (log) => RawLog(log, 'error');
exports.LogError = LogError;
const Log = (log) => RawLog(log, 'info');
exports.Log = Log;
exports.default = exports.Log;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTG9nZ2VyL3NvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSwyQkFBeUI7QUFDekIsdURBQStCO0FBSy9CLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUVqQyxLQUFLLFVBQVUsWUFBWSxDQUFDLE9BQWUsRUFBRSxJQUFjLEVBQUUsT0FBTyxHQUFHLFNBQVM7SUFDOUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxnQkFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3BDLE1BQU0sSUFBSSxHQUFHLEdBQUcsT0FBTyxJQUFJLElBQUksSUFBSSxFQUFFLENBQUMsSUFBSSxNQUFNLENBQUM7SUFFakQsZ0JBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sR0FBRyxRQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUVELEtBQUssVUFBVSxNQUFNLENBQUMsR0FBa0IsRUFBRSxPQUFpQixNQUFNLEVBQUUsSUFBSSxHQUFHLEtBQUssRUFBRSxTQUFTLEdBQUcsSUFBSTtJQUMvRixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsTUFBTSxPQUFPLEdBQWEsSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFFMUQsTUFBTSxFQUFFLEdBQUcsTUFBTSxnQkFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3BDLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDckIsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO0lBRXRDLE1BQU0sT0FBTyxHQUFHLElBQUk7UUFDbEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMs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