"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
const azul_helper_1 = __importDefault(require("azul-helper"));
async function storeChatData(UserID64, Message, Bot = false, server_timestamp, BaseDir = "history") {
    const ts = await azul_helper_1.default.TimeStamp(new Date(server_timestamp));
    const filePath = BaseDir + `/chat/${ts.Date}/${UserID64}.log`;
    const line = `[${ts.Time}] ${Bot ? "B" : "U"}: ${Message}` + os_1.EOL;
    return azul_helper_1.default.storeFile(filePath, line);
}
exports.default = storeChatData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVDaGF0RGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3N0b3JlQ2hhdERhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyQkFBeUI7QUFDekIsOERBQWlDO0FBRWpDLEtBQUssVUFBVSxhQUFhLENBQUMsUUFBZ0IsRUFBRSxPQUFlLEVBQUUsTUFBZSxLQUFLLEVBQUUsZ0JBQXdCLEVBQUUsVUFBa0IsU0FBUztJQUN2SSxNQUFNLEVBQUUsR0FBRyxNQUFNLHFCQUFNLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUM5RCxNQUFNLFFBQVEsR0FBRyxPQUFPLEdBQUcsU0FBUyxFQUFFLENBQUMsSUFBSSxJQUFJLFFBQVEsTUFBTSxDQUFDO0lBQzlELE1BQU0sSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRSxHQUFHLFFBQUcsQ0FBQztJQUNqRSxPQUFPLHFCQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM1QyxDQUFDO0FBRUQsa0JBQWUsYUFBYSxDQUFDIn0=