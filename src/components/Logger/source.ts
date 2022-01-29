/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import { EOL } from 'os';
// @ts-expect-error unfortunately we have -> "import-extensions/no-unresolved"
import { TimeStamp, storeFile } from '../Helper';

import type { LogTypes } from '../../..';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const colour = require('colour');

async function storeLogData(logData: string, type: LogTypes, BaseDir = 'history'): Promise<void> {
  const ts = await TimeStamp();
  const file = `${BaseDir}/${type}/${ts.Date}.log`;
  //   logData += EOL; // Breakline
  storeFile(file, logData + EOL, 'a'); // appending
}

async function RawLog(log: string | JSON, type: LogTypes = 'info', json = false, DebugMode = true) {
  const Label = type.toUpperCase();
  const LogType: LogTypes = type === 'warn' ? 'info' : type;

  const ts = await TimeStamp();
  const time = ts.Time;
  const datetime = `${ts.Date} ${time}`;

  const LogText = json
    ? JSON.stringify(log)
    : log;

  const text = `${datetime} ${Label}${(type === 'info' || type === 'warn') ? ' ' : ''} => ${LogText}`;
  const logText = `${time}: ${LogText}`;

  storeLogData(logText, LogType);

  if (type === 'debug' && !DebugMode) return;

  // do colours
  let message;

  switch (type) {
    default:
    case 'info':
      message = colour.cyan(text);
      break;
    case 'warn':
      message = colour.yellow(text);
      console.warn(message);
      return;
    case 'trade':
      message = colour.green(text);
      break;
    case 'debug':
      message = colour.grey(text);
      console.debug(message);
      return;
    case 'error':
      message = colour.red(text);
      console.error(message);
      return;
  }

  console.log(message);
}
export const Warn = (log: string): Promise<void> => RawLog(log, 'warn');
export const Trade = (log: string): Promise<void> => RawLog(log, 'trade');
export const Debug = (log:string, json = false, DebugMode = true): Promise<void> => RawLog(log, 'debug', json, DebugMode);
export const LogError = (log: string): Promise<void> => RawLog(log, 'error');
export const Log = (log: string): Promise<void> => RawLog(log, 'info');

export default Log;
