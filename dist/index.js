"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const azul_helper_1 = __importDefault(require("azul-helper"));
const moment_1 = require("moment");
const Logger_1 = __importDefault(require("./components/Logger"));
const storeChatData_1 = __importDefault(require("./components/storeChatData"));
const Cache_1 = __importDefault(require("./components/Cache"));
let Graphic;
let Timer;
function SetupPattern(newGraphic) {
    Graphic = newGraphic;
    Timer = setTimeout(() => { Graphic = null; }, moment_1.duration(5, 'minutes').asMilliseconds());
}
function Pattern(Clear = true) {
    console.log(Graphic);
    if (Clear) {
        Graphic = null;
        clearTimeout(Timer);
    }
}
exports.default = {
    Log: Logger_1.default,
    storeChatData: storeChatData_1.default,
    Cache: Cache_1.default,
    ...azul_helper_1.default,
    SetupPattern,
    Pattern,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4REFBaUM7QUFDakMsbUNBQWtDO0FBQ2xDLGlFQUFzQztBQUV0QywrRUFBdUQ7QUFFdkQsK0RBQXVDO0FBRXZDLElBQUksT0FBc0IsQ0FBQztBQUMzQixJQUFJLEtBQVUsQ0FBQztBQUVmLFNBQVMsWUFBWSxDQUFDLFVBQWtCO0lBQ3RDLE9BQU8sR0FBRyxVQUFVLENBQUM7SUFDckIsS0FBSyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLGlCQUFRLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7QUFDekYsQ0FBQztBQUVELFNBQVMsT0FBTyxDQUFDLFFBQWlCLElBQUk7SUFFcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQixJQUFJLEtBQUssRUFBRTtRQUNULE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDZixZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDckI7QUFDSCxDQUFDO0FBRUQsa0JBQWU7SUFDYixHQUFHLEVBQUgsZ0JBQUc7SUFDSCxhQUFhLEVBQWIsdUJBQWE7SUFDYixLQUFLLEVBQUwsZUFBSztJQUNMLEdBQUcscUJBQU07SUFDVCxZQUFZO0lBQ1osT0FBTztDQUNSLENBQUMifQ==