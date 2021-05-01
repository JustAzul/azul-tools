"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const azul_helper_1 = __importDefault(require("azul-helper"));
const fs_1 = __importDefault(require("fs"));
const Logger_1 = __importDefault(require("./components/Logger"));
const storeChatData_1 = __importDefault(require("./components/storeChatData"));
const Cache_1 = __importDefault(require("./components/Cache"));
function Pattern() {
    const encoding = 'utf-8';
    const Filedir = fs_1.default.existsSync('./Pattern.txt') ? './Pattern.txt' : '../Pattern.txt';
    const Graphic = fs_1.default.readFileSync(Filedir, { encoding });
    console.log(Graphic);
}
exports.default = {
    Log: Logger_1.default,
    storeChatData: storeChatData_1.default,
    Cache: Cache_1.default,
    ...azul_helper_1.default,
    Pattern,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4REFBaUM7QUFDakMsNENBQW9CO0FBQ3BCLGlFQUFzQztBQUV0QywrRUFBdUQ7QUFFdkQsK0RBQXVDO0FBRXZDLFNBQVMsT0FBTztJQUNkLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUN6QixNQUFNLE9BQU8sR0FBRyxZQUFFLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO0lBQ3BGLE1BQU0sT0FBTyxHQUFHLFlBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUV2RCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxrQkFBZTtJQUNiLEdBQUcsRUFBSCxnQkFBRztJQUNILGFBQWEsRUFBYix1QkFBYTtJQUNiLEtBQUssRUFBTCxlQUFLO0lBQ0wsR0FBRyxxQkFBTTtJQUNULE9BQU87Q0FDUixDQUFDIn0=