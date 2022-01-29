"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const numeral_1 = __importDefault(require("numeral"));
const steamid_1 = __importDefault(require("steamid"));
const mkdirp_1 = __importDefault(require("mkdirp"));
const graceful_fs_1 = require("graceful-fs");
const path_1 = require("path");
const ReadJson_1 = __importDefault(require("./ReadJson"));
const SyncReadJson_1 = __importDefault(require("./SyncReadJson"));
const Regx = {
    SteamID64: /[0-9]{17}/,
    TradeOfferUrl: [/(http|https)?:\/\/steamcommunity\.com\/tradeoffer\/new\/?\?partner=[0-9]*&token=[a-zA-Z0-9_-]*/, /(http|https)?:\/\/steamcommunity\.com\/tradeoffer\/new\/?\?token=[a-zA-Z0-9_-]*&partner=[0-9]*/],
    Url: /[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/,
};
function AsyncFastConcat(BaseArray, ToConcatArray) {
    return new Promise((resolve) => {
        const BaseLenght = BaseArray.length;
        BaseArray.length += ToConcatArray.length;
        const Execute = (i = 0) => {
            if (i === ToConcatArray.length) {
                resolve();
                return;
            }
            BaseArray[BaseLenght + i] = ToConcatArray[i];
            setImmediate(Execute.bind(null, i + 1));
        };
        Execute();
    });
}
function FastConcat(BaseArray, ToConcatArray) {
    const BaseLenght = BaseArray.length;
    BaseArray.length += ToConcatArray.length;
    for (let i = 0; i < ToConcatArray.length; i += 1) {
        BaseArray[BaseLenght + i] = ToConcatArray[i];
    }
}
async function storeFile(Path, content, flag = 'a') {
    const o = {
        flags: flag,
    };
    if (!(0, graceful_fs_1.existsSync)(Path)) {
        const Dirname = await (0, path_1.dirname)(Path.toString());
        await (0, mkdirp_1.default)(Dirname);
    }
    return new Promise((resolve) => {
        const Stream = (0, graceful_fs_1.createWriteStream)(Path.toString(), o);
        Stream.end(content, resolve);
    });
}
function SplitArray(Array, MaxSize) {
    return new Promise((resolve) => {
        const SplitedArray = [];
        do {
            const Split = Array.splice(0, Math.min(Array.length, MaxSize));
            SplitedArray.push(Split);
        } while (Array.length > 0);
        resolve(SplitedArray);
    });
}
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
async function isURL(str) {
    return Regx.Url.test(str);
}
async function isTradeOfferURL(str) {
    for (let i = 0; i < Regx.TradeOfferUrl.length; i += 1) {
        const Regex = Regx.TradeOfferUrl[i];
        const Result = Regex.test(str);
        if (Result)
            return true;
    }
    return false;
}
async function isValidSteamID(value) {
    try {
        return new steamid_1.default(value).isValid();
    }
    catch {
        return false;
    }
}
async function isSteamID64(str) {
    const isValid = await isValidSteamID(str);
    if (!isValid)
        return false;
    return Regx.SteamID64.test(str);
}
async function GetSteamID64FromURL(str) {
    const m = str.match(Regx.SteamID64);
    if (m)
        return m[0];
    return m;
}
async function TimeStamp(date = new Date()) {
    const ts = (0, moment_1.default)(date);
    const o = {
        Date: ts.format('YYYY-MM-DD'),
        Time: ts.format('HH:mm:ss'),
    };
    return o;
}
function formatNumber(number) {
    return (0, numeral_1.default)(number).format('0,0');
}
exports.default = {
    TimeStamp,
    isURL,
    isTradeOfferURL,
    isSteamID64,
    isValidSteamID,
    GetSteamID64FromURL,
    formatNumber,
    readJSON: ReadJson_1.default,
    readJSONSync: SyncReadJson_1.default,
    sleep,
    SplitArray,
    createPath: mkdirp_1.default,
    storeFile,
    WriteFile: storeFile,
    Regex: Regx,
    FastConcat,
    AsyncFastConcat,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvSGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsb0RBQTRCO0FBQzVCLHNEQUE4QjtBQUM5QixzREFBOEI7QUFDOUIsb0RBQWdDO0FBQ2hDLDZDQUFzRTtBQUN0RSwrQkFBK0I7QUFFL0IsMERBQWtDO0FBQ2xDLGtFQUEwQztBQUkxQyxNQUFNLElBQUksR0FBRztJQUNYLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLGFBQWEsRUFBRSxDQUFDLGdHQUFnRyxFQUFFLGdHQUFnRyxDQUFDO0lBQ25OLEdBQUcsRUFBRSx3RUFBd0U7Q0FDOUUsQ0FBQztBQUVGLFNBQVMsZUFBZSxDQUFDLFNBQWEsRUFBRSxhQUFpQjtJQUN2RCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDN0IsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUVwQyxTQUFTLENBQUMsTUFBTSxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFFekMsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEtBQUssYUFBYSxDQUFDLE1BQU0sRUFBRTtnQkFDOUIsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsT0FBTzthQUNSO1lBR0QsU0FBUyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQztRQUVGLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBUyxVQUFVLENBQUMsU0FBYSxFQUFFLGFBQWlCO0lBQ2xELE1BQU0sVUFB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