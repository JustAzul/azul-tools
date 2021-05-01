"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const azul_helper_1 = __importDefault(require("azul-helper"));
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const Logger_1 = __importDefault(require("./components/Logger"));
const storeChatData_1 = __importDefault(require("./components/storeChatData"));
const Cache_1 = __importDefault(require("./components/Cache"));
function Pattern() {
    const encoding = 'utf-8';
    const FilePath = fs_1.existsSync(path_1.default.join(__dirname, '../', 'Pattern.txt')) ? path_1.default.join(__dirname, '../', 'Pattern.txt') : path_1.default.join(__dirname, './', 'Pattern.txt');
    const TextGraphic = fs_1.readFileSync(FilePath, { encoding });
    console.log(TextGraphic);
}
exports.default = {
    Log: Logger_1.default,
    storeChatData: storeChatData_1.default,
    Cache: Cache_1.default,
    ...azul_helper_1.default,
    Pattern,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4REFBaUM7QUFDakMsZ0RBQXdCO0FBQ3hCLDJCQUE4QztBQUM5QyxpRUFBc0M7QUFFdEMsK0VBQXVEO0FBRXZELCtEQUF1QztBQUV2QyxTQUFTLE9BQU87SUFDZCxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDekIsTUFBTSxRQUFRLEdBQUcsZUFBVSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNqSyxNQUFNLFdBQVcsR0FBRyxpQkFBWSxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFFekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMzQixDQUFDO0FBRUQsa0JBQWU7SUFDYixHQUFHLEVBQUgsZ0JBQUc7SUFDSCxhQUFhLEVBQWIsdUJBQWE7SUFDYixLQUFLLEVBQUwsZUFBSztJQUNMLEdBQUcscUJBQU07SUFDVCxPQUFPO0NBQ1IsQ0FBQyJ9