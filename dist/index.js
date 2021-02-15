"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = __importDefault(require("./components/Logger"));
const azul_helper_1 = __importDefault(require("azul-helper"));
const storeChatData_1 = __importDefault(require("./components/storeChatData"));
const Cache_1 = __importDefault(require("./components/Cache"));
exports.default = Object.assign({ Log: Logger_1.default,
    storeChatData: storeChatData_1.default,
    Cache: Cache_1.default }, azul_helper_1.default);
