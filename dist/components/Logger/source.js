"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = exports.LogError = exports.Debug = exports.Trade = exports.Warn = void 0;
const os_1 = require("os");
const azul_helper_1 = __importDefault(require("azul-helper"));
const colour = require('colour');
async function storeLogData(logData, type, BaseDir = 'history') {
    const ts = await azul_helper_1.default.TimeStamp();
    const file = `${BaseDir}/${type}/${ts.Date}.log`;
    azul_helper_1.default.storeFile(file, logData + os_1.EOL, 'a');
}
async function RawLog(log, type = 'info', json = false, DebugMode = true) {
    const Label = type.toUpperCase();
    const LogType = type === 'warn' ? 'info' : type;
    const ts = await azul_helper_1.default.TimeStamp();
    const time = ts.Time;
    const datetime = `${ts.Date} ${time}`;
    if (json)
        log = JSON.stringify(log);
    const text = `${datetime} ${Label}${(type === 'info' || type === 'warn') ? ' ' : ''} => ${log}`;
    const logText = `${time}: ${log}`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTG9nZ2VyL3NvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSwyQkFBeUI7QUFDekIsOERBQWlDO0FBRWpDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUlqQyxLQUFLLFVBQVUsWUFBWSxDQUFDLE9BQWUsRUFBRSxJQUFjLEVBQUUsT0FBTyxHQUFHLFNBQVM7SUFDOUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxxQkFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3BDLE1BQU0sSUFBSSxHQUFHLEdBQUcsT0FBTyxJQUFJLElBQUksSUFBSSxFQUFFLENBQUMsSUFBSSxNQUFNLENBQUM7SUFFakQscUJBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sR0FBRyxRQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUVELEtBQUssVUFBVSxNQUFNLENBQUMsR0FBa0IsRUFBRSxPQUFpQixNQUFNLEVBQUUsSUFBSSxHQUFHLEtBQUssRUFBRSxTQUFTLEdBQUcsSUFBSTtJQUMvRixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsTUFBTSxPQUFPLEdBQWEsSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFFMUQsTUFBTSxFQUFFLEdBQUcsTUFBTSxxQkFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3BDLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDckIsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO0lBR3RDLElBQUksSUFBSTtRQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxD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