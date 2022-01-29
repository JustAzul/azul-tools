"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
const Helper_1 = require("./Helper");
async function storeChatData(UserID64, Message, Bot = false, server_timestamp, BaseDir = 'history') {
    const ts = await (0, Helper_1.TimeStamp)(new Date(server_timestamp));
    const filePath = `${BaseDir}/chat/${ts.Date}/${UserID64}.log`;
    const line = `[${ts.Time}] ${Bot ? 'B' : 'U'}: ${Message}${os_1.EOL}`;
    return (0, Helper_1.storeFile)(filePath, line);
}
exports.default = storeChatData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVDaGF0RGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3N0b3JlQ2hhdERhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSwyQkFBeUI7QUFFekIscUNBQWdEO0FBR2hELEtBQUssVUFBVSxhQUFhLENBQUMsUUFBZ0IsRUFBRSxPQUFlLEVBQUUsR0FBRyxHQUFHLEtBQUssRUFBRSxnQkFBd0IsRUFBRSxPQUFPLEdBQUcsU0FBUztJQUN4SCxNQUFNLEVBQUUsR0FBRyxNQUFNLElBQUEsa0JBQVMsRUFBQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDdkQsTUFBTSxRQUFRLEdBQUcsR0FBRyxPQUFPLFNBQVMsRUFBRSxDQUFDLElBQUksSUFBSSxRQUFRLE1BQU0sQ0FBQztJQUM5RCxNQUFNLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxPQUFPLEdBQUcsUUFBRyxFQUFFLENBQUM7SUFDakUsT0FBTyxJQUFBLGtCQUFTLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFFRCxrQkFBZSxhQUFhLENBQUMifQ==