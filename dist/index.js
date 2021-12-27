"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const figlet_1 = __importDefault(require("figlet"));
const azul_helper_1 = __importDefault(require("azul-helper"));
const Logger_1 = __importDefault(require("./components/Logger"));
const storeChatData_1 = __importDefault(require("./components/storeChatData"));
const Cache_1 = __importDefault(require("./components/Cache"));
const colour = require('colour');
function Pattern() {
    const o = {
        horizontalLayout: 'full',
        verticalLayout: 'full',
    };
    const text = figlet_1.default.textSync('Justazul.com', o);
    console.log(colour.cyan(text));
}
exports.default = {
    Log: Logger_1.default,
    storeChatData: storeChatData_1.default,
    Cache: Cache_1.default,
    ...azul_helper_1.default,
    Pattern,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvREFBNEI7QUFDNUIsOERBQWlDO0FBQ2pDLGlFQUFzQztBQUV0QywrRUFBdUQ7QUFFdkQsK0RBQXVDO0FBRXZDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUVqQyxTQUFTLE9BQU87SUFDZCxNQUFNLENBQUMsR0FBRztRQUNSLGdCQUFnQixFQUFFLE1BQU07UUFDeEIsY0FBYyxFQUFFLE1BQU07S0FDdkIsQ0FBQztJQUdGLE1BQU0sSUFBSSxHQUFHLGdCQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUVoRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBRUQsa0JBQWU7SUFDYixHQUFHLEVBQUgsZ0JBQUc7SUFDSCxhQUFhLEVBQWIsdUJBQWE7SUFDYixLQUFLLEVBQUwsZUFBSztJQUNMLEdBQUcscUJBQU07SUFDVCxPQUFPO0NBQ1IsQ0FBQyJ9