"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = exports.LogError = exports.Debug = exports.Trade = exports.Warn = void 0;
const colour = require('colour');
const os_1 = require("os");
const azul_helper_1 = __importDefault(require("azul-helper"));
async function storeLogData(logData, type, BaseDir = "history") {
    const ts = await azul_helper_1.default.TimeStamp();
    const file = BaseDir + `/${type}/${ts.Date}.log`;
    logData += os_1.EOL;
    azul_helper_1.default.storeFile(file, logData, "a");
}
async function _Log(log, type = "info", json = false, DebugMode = true) {
    const Label = type.toUpperCase();
    const LogType = type === "warn" ? "info" : type;
    const ts = await azul_helper_1.default.TimeStamp();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTG9nZ2VyL3NvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFakMsMkJBQXlCO0FBQ3pCLDhEQUFpQztBQUlqQyxLQUFLLFVBQVUsWUFBWSxDQUFDLE9BQWUsRUFBRSxJQUFjLEVBQUcsVUFBa0IsU0FBUztJQUNyRixNQUFNLEVBQUUsR0FBRyxNQUFNLHFCQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDcEMsTUFBTSxJQUFJLEdBQUcsT0FBTyxHQUFHLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLE1BQU0sQ0FBQztJQUNqRCxPQUFPLElBQUksUUFBRyxDQUFDO0lBQ2YscUJBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBRUQsS0FBSyxVQUFVLElBQUksQ0FBQyxHQUFrQixFQUFFLE9BQWlCLE1BQU0sRUFBRSxPQUFnQixLQUFLLEVBQUUsWUFBcUIsSUFBSTtJQUU3RyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsTUFBTSxPQUFPLEdBQWEsSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFFMUQsTUFBTSxFQUFFLEdBQUcsTUFBTSxxQkFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3BDLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDckIsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO0lBRXRDLElBQUksSUFBSTtRQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXBDLE1BQU0sSUFBSSxHQUFHLEdBQUcsUUFBUSxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxNQUFNLElBQUUsSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUEsQ0FBQyxDQUFDLEVBQUUsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUMzRixNQUFNLE9BQU8sR0FBRyxHQUFHLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUVsQyxZQUFZLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRS9CLElBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxDQUFDLFNBQVM7UUFBRSxPQUFPO0lBRzNDLElBQUksT0FBTyxDQUFDO0lBRVosUUFBUSxJQUFJLEVBQUU7UUFDVixLQUFLLE1BQU07WUFDUCxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixNQUFNO1FBQ1YsS0FBSyxNQUFNO1lBQ1AsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLEtBQUssT0FBTztZQUNSLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdCLE1BQU07UUFDVixLQUFLLE9BQU87WUFDUixPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsS0FBSyxPQUFPO1lBQ1IsT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0IsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBRXJDO0lBRUQsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRWhDLENBQUM7QUFDTSxNQUFNLElBQUksR0FBRyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUExQyxRQUFBLElBQUksUUFBc0M7QUFDaEQsTUFBTSxLQUFLLEdBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFBNUMsUUFBQSxLQUFLLFNBQXVDO0FBQ2xELE1BQU0sS0FBSyxHQUFHLENBQUMsR0FBVSxFQUFFLE9BQWUsS0FBSyxFQUFFLFlBQW9CLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQTVHLFFBQUEsS0FBSyxTQUF1RztBQUNsSCxNQUFNLFFBQVEsR0FBRyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUEvQyxRQUFBLFFBQVEsWUFBdUM7QUFDckQsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFBekMsUUFBQSxHQUFHLE9BQXNDO0FBRXRELGtCQUFlLFdBQUcsQ0FBQyJ9