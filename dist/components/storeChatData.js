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
const os_1 = require("os");
const azul_helper_1 = require("azul-helper");
function storeChatData(UserID64, Message, Bot = false, server_timestamp, BaseDir = "history") {
    return __awaiter(this, void 0, void 0, function* () {
        const ts = yield azul_helper_1.TimeStamp(new Date(server_timestamp));
        const filePath = BaseDir + `/chat/${ts.Date}/${UserID64}.log`;
        const line = `[${ts.Time}] ${Bot ? "B" : "U"}: ${Message}` + os_1.EOL;
        return azul_helper_1.storeFile(filePath, line);
    });
}
exports.default = storeChatData;
