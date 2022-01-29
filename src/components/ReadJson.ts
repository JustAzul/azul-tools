/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import {
  isMainThread, Worker, parentPort, workerData,
} from 'worker_threads';
import type { PathLike } from 'graceful-fs';
import SyncReadJson from './SyncReadJson';

const Read = async (Filepath: PathLike): Promise<Record<string, unknown>> => {
  if (isMainThread) {
    return new Promise((resolve, reject) => {
      const o = {
        workerData: {
          Filepath,
        },

      };

      const worker = new Worker(__filename, o);

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

  return SyncReadJson(Filepath);
};

if (!isMainThread) {
  (async () => {
    const Result = await Read(workerData.Filepath);
    parentPort?.postMessage(Result);
  })();
}

export default Read;
