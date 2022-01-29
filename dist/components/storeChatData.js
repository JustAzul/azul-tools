"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
const Helper_1 = __importDefault(require("./Helper"));
async function storeChatData(UserID64, Message, Bot = false, server_timestamp, BaseDir = 'history') {
    const ts = await Helper_1.default.TimeStamp(new Date(server_timestamp));
    const filePath = `${BaseDir}/chat/${ts.Date}/${UserID64}.log`;
    const line = `[${ts.Time}] ${Bot ? 'B' : 'U'}: ${Message}${os_1.EOL}`;
    return Helper_1.default.storeFile(filePath, line);
}
exports.default = storeChatData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVDaGF0RGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3N0b3JlQ2hhdERhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSwyQkFBeUI7QUFDekIsc0RBQThCO0FBRzlCLEtBQUssVUFBVSxhQUFhLENBQUMsUUFBZ0IsRUFBRSxPQUFlLEVBQUUsR0FBRyxHQUFHLEtBQUssRUFBRSxnQkFBd0IsRUFBRSxPQUFPLEdBQUcsU0FBUztJQUN4SCxNQUFNLEVBQUUsR0FBRyxNQUFNLGdCQUFNLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUM5RCxNQUFNLFFBQVEsR0FBRyxHQUFHLE9BQU8sU0FBUyxFQUFFLENBQUMsSUFBSSxJQUFJLFFBQVEsTUFBTSxDQUFDO0lBQzlELE1BQU0sSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLE9BQU8sR0FBRyxRQUFHLEVBQUUsQ0FBQztJQUNqRSxPQUFPLGdCQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMxQyxDQUFDO0FBRUQsa0JBQWUsYUFBYSxDQUFDIn0=