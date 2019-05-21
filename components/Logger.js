const colour = require('colour');
const {storeFile} = require('./FileStore.js');
const {EOL} = require("os"); 
const {TimeStamp} = require('azul-helper');

async function _Log(log, type = "info", json = false, DebugMode = true) {

    const Label = type.toUpperCase();
    const Folder = type == "warn" ? "info" : Label.toLowerCase();

    const ts = await TimeStamp();
    const time = ts.Time;
    const datetime = `${ts.Date} ${time}`;

    if (json) log = JSON.stringify(log);

    const text = `${datetime} ${Label}${(type == "info"||type == "warn") ? " ": ""} => ${log}`;
    const logText = `${time}: ${log}`;

    storeLogData(logText, Folder);

    if (type == "debug" && !DebugMode) return;

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

    console.log(message);

}

async function Log(log) {
    _Log(log, "info");
}

async function Warn(log) {
    _Log(log, "warn");
}

async function Trade(log) {
    _Log(log, "trade");
}

async function Debug(log, json = false, DebugMode = true) {
    _Log(log, "debug", json, DebugMode);
}

async function LogError(log) {
    _Log(log, "error");
}

async function storeLogData(logData, type) {
    const BaseDir = "history";
    const ts = await TimeStamp();
    const file = BaseDir + `/${type}/${ts.Date}.log`
    logData += EOL; //Breakline
    storeFile(file, logData, "a"); //appending
}

module.exports = Log;
module.exports.Warn = Warn;
module.exports.Trade = Trade;
module.exports.Debug = Debug;
module.exports.Error = LogError;