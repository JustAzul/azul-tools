"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const Log = require('./Logger');
class Test {
    constructor(testName) {
        this.startedAt = moment_1.default();
        this.testName = testName;
        this.endAt = null;
        this.time = function () {
            var _a;
            return ((_a = this.endAt) === null || _a === void 0 ? void 0 : _a.diff(this.startedAt, 'milliseconds')) + "ms";
        };
        this.end = function (emitLog = false) {
            this.endAt = moment_1.default();
            Log.Debug(`${this.testName} took ${this.time()}.`, false, emitLog);
        };
    }
}
exports.default = Test;
