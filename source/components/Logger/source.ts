const colour = require('colour');

import { EOL } from 'os';
import {TimeStamp, storeFile} from 'azul-helper';

export type LogTypes = "info" | "warn" | "trade" | "debug" | "error";

async function storeLogData(logData: string, type: LogTypes , BaseDir: string = "history"): Promise<void> {
    const ts = await TimeStamp();
    const file = BaseDir + `/${type}/${ts.Date}.log`;
    logData += EOL; //Breakline
    storeFile(file, logData, "a"); //appending
}

async function _Log(log: string | JSON, type: LogTypes = "info", json: Boolean = false, DebugMode: Boolean = true) {

    const Label = type.toUpperCase();
    const LogType: LogTypes = type === "warn" ? "info" : type;

    const ts = await TimeStamp();
    const time = ts.Time;
    const datetime = `${ts.Date} ${time}`;

    if (json) log = JSON.stringify(log);

    const text = `${datetime} ${Label}${(type == "info"||type == "warn") ? " ": ""} => ${log}`;
    const logText = `${time}: ${log}`;

    storeLogData(logText, LogType);

    if (type === "debug" && !DebugMode) return;

    //do colours
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

}
export const Warn = (log: string) => _Log(log, "warn");
export const Trade = (log: string) => _Log(log, "trade");
export const Debug = (log:string, json:Boolean = false, DebugMode:Boolean = true) => _Log(log, "debug", json, DebugMode);
export const LogError = (log: string) => _Log(log, "error");
export const Log = (log: string) => _Log(log, "info");

export default Log;