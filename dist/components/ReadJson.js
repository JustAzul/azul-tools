"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const worker_threads_1 = require("worker_threads");
const SyncReadJson_1 = __importDefault(require("./SyncReadJson"));
const Read = async (Filepath) => {
    if (worker_threads_1.isMainThread) {
        return new Promise((resolve, reject) => {
            const o = {
                workerData: {
                    Filepath,
                },
            };
            const worker = new worker_threads_1.Worker(__filename, o);
            worker.once('error', (e) => {
                worker.unref();
                reject(e);
            });
            worker.once('message', (Response) => {
                worker.unref();
                resolve(Response);
            });
        });
    }
    return (0, SyncReadJson_1.default)(Filepath);
};
if (!worker_threads_1.isMainThread) {
    (async () => {
        const Result = await Read(worker_threads_1.workerData.Filepath);
        worker_threads_1.parentPort?.postMessage(Result);
    })();
}
exports.default = Read;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZEpzb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9SZWFkSnNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLG1EQUV3QjtBQUV4QixrRUFBMEM7QUFFMUMsTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUFFLFFBQWtCLEVBQW9DLEVBQUU7SUFDMUUsSUFBSSw2QkFBWSxFQUFFO1FBQ2hCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsTUFBTSxDQUFDLEdBQUc7Z0JBQ1IsVUFBVSxFQUFFO29CQUNWLFFBQVE7aUJBQ1Q7YUFFRixDQUFDO1lBRUYsTUFBTSxNQUFNLEdBQUcsSUFBSSx1QkFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUV6QyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUN6QixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2YsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1osQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUNsQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2YsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7S0FDSjtJQUVELE9BQU8sSUFBQSxzQkFBWSxFQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQztBQUVGLElBQUksQ0FBQyw2QkFBWSxFQUFFO0lBQ2pCLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDVixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQywyQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLDJCQUFVLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FBQyxFQUFFLENBQUM7Q0FDTjtBQUVELGtCQUFlLElBQUksQ0FBQyJ9