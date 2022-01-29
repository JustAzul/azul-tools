"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const figlet_1 = __importDefault(require("figlet"));
const Helper_1 = __importDefault(require("./components/Helper"));
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
    ...Helper_1.default,
    Pattern,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxvREFBNEI7QUFDNUIsaUVBQXlDO0FBQ3pDLGlFQUFzQztBQUN0QywrRUFBdUQ7QUFDdkQsK0RBQXVDO0FBR3ZDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUVqQyxTQUFTLE9BQU87SUFDZCxNQUFNLENBQUMsR0FBbUI7UUFDeEIsZ0JBQWdCLEVBQUUsTUFBTTtRQUN4QixjQUFjLEVBQUUsTUFBTTtLQUN2QixDQUFDO0lBRUYsTUFBTSxJQUFJLEdBQUcsZ0JBQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRWhELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFFRCxrQkFBZTtJQUNiLEdBQUcsRUFBSCxnQkFBRztJQUNILGFBQWEsRUFBYix1QkFBYTtJQUNiLEtBQUssRUFBTCxlQUFLO0lBQ0wsR0FBRyxnQkFBTTtJQUNULE9BQU87Q0FDUixDQUFDIn0=