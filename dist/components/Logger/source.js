"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = exports.LogError = exports.Debug = exports.Trade = exports.Warn = void 0;
const colour = require('colour');
const os_1 = require("os");
const azul_helper_1 = require("azul-helper");
function storeLogData(logData, type, BaseDir = "history") {
    return __awaiter(this, void 0, void 0, function* () {
        const ts = yield azul_helper_1.TimeStamp();
        const file = BaseDir + `/${type}/${ts.Date}.log`;
        logData += os_1.EOL;
        azul_helper_1.storeFile(file, logData, "a");
    });
}
function _Log(log, type = "info", json = false, DebugMode = true) {
    return __awaiter(this, void 0, void 0, function* () {
        const Label = type.toUpperCase();
        const LogType = type === "warn" ? "info" : type;
        const ts = yield azul_helper_1.TimeStamp();
        const time = ts.Time;
        const datetime = `${ts.Date} ${time}`;
        if (json)
            log = JSON.stringify(log);
        const text = `${datetime} ${Label}${(type == "info" || type == "warn") ? " " : ""} => ${log}`;
        const logText = `${time}: ${log}`;
        storeLogData(logText, LogType);
        if (type === "debug" && !DebugMode)
            return;
        let message;
        switch (type) {
            case "info":
                message = colour.cyan(text);
                break;
            case "warn":
                message = colour.yellow(text);
                return console.warn(message);
            case "trade":
                message = colour.green(text);
                break;
            case "debug":
                message = colour.grey(text);
                return console.debug(message);
            case "error":
                message = colour.red(text);
                return console.error(message);
        }
        return console.log(message);
    });
}
const Warn = (log) => _Log(log, "warn");
exports.Warn = Warn;
const Trade = (log) => _Log(log, "trade");
exports.Trade = Trade;
const Debug = (log, json = false, DebugMode = true) => _Log(log, "debug", json, DebugMode);
exports.Debug = Debug;
const LogError = (log) => _Log(log, "error");
exports.LogError = LogError;
const Log = (log) => _Log(log, "info");
exports.Log = Log;
exports.default = exports.Log;
