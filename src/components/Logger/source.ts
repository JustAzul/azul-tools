/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-var-requires
import { EOL } from 'os';
import { TimeStamp, storeFile } from 'azul-helper';

const colour = require('colour');

export type LogTypes = 'info' | 'warn' | 'trade' | 'debug' | 'error';

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

  // eslint-disable-next-line no-param-reassign
  if (json) log = JSON.stringify(log);

  const text = `${datetime} ${Label}${(type === 'info' || type === 'warn') ? ' ' : ''} => ${log}`;
  const logText = `${time}: ${log}`;

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
