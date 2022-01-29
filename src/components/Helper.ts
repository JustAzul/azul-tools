/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import moment from 'moment';
import numeral from 'numeral';
import SteamID from 'steamid';
import createPath from 'mkdirp';
import { PathLike, createWriteStream, existsSync } from 'graceful-fs';
import { dirname } from 'path';

import readJSON from './ReadJson';
import readJSONSync from './SyncReadJson';

import type { ArraySplitedValue, timeStamp } from '../..';

const Regx = {
  SteamID64: /[0-9]{17}/,
  TradeOfferUrl: [/(http|https)?:\/\/steamcommunity\.com\/tradeoffer\/new\/?\?partner=[0-9]*&token=[a-zA-Z0-9_-]*/, /(http|https)?:\/\/steamcommunity\.com\/tradeoffer\/new\/?\?token=[a-zA-Z0-9_-]*&partner=[0-9]*/],
  Url: /[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/,
};

function AsyncFastConcat(BaseArray: [], ToConcatArray: []): Promise<void> {
  return new Promise((resolve) => {
    const BaseLenght = BaseArray.length;
    // eslint-disable-next-line no-param-reassign
    BaseArray.length += ToConcatArray.length;

    const Execute = (i = 0) => {
      if (i === ToConcatArray.length) {
        resolve();
        return;
      }

      // eslint-disable-next-line no-param-reassign
      BaseArray[BaseLenght + i] = ToConcatArray[i];
      setImmediate(Execute.bind(null, i + 1));
    };

    Execute();
  });
}

function FastConcat(BaseArray: [], ToConcatArray: []): void {
  const BaseLenght = BaseArray.length;
  // eslint-disable-next-line no-param-reassign
  BaseArray.length += ToConcatArray.length;
  for (let i = 0; i < ToConcatArray.length; i += 1) {
    // eslint-disable-next-line no-param-reassign
    BaseArray[BaseLenght + i] = ToConcatArray[i];
  }
}

async function storeFile(Path: PathLike, content: string | NodeJS.ArrayBufferView, flag = 'a'): Promise<void> {
  const o = {
    flags: flag,
  };

  if (!existsSync(Path)) {
    const Dirname = await dirname(Path.toString());
    await createPath(Dirname);
  }

  return new Promise((resolve) => {
    const Stream = createWriteStream(Path.toString(), o);
    Stream.end(content, resolve);
  });
}

function SplitArray(Array: [], MaxSize: number): Promise<ArraySplitedValue> {
  return new Promise((resolve) => {
    const SplitedArray: ArraySplitedValue = [];

    do {
      const Split = Array.splice(0, Math.min(Array.length, MaxSize));
      SplitedArray.push(Split);
    } while (Array.length > 0);

    resolve(SplitedArray);
  });
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function isURL(str: string): Promise<boolean> {
  return Regx.Url.test(str);
}

async function isTradeOfferURL(str: string): Promise<boolean> {
  for (let i = 0; i < Regx.TradeOfferUrl.length; i += 1) {
    const Regex = Regx.TradeOfferUrl[i];
    const Result = Regex.test(str);
    if (Result) return true;
  }

  return false;
}

async function isValidSteamID(value: string): Promise<boolean> {
  try {
    return new SteamID(value).isValid();
  } catch {
    return false;
  }
}

async function isSteamID64(str: string): Promise<boolean> {
  const isValid = await isValidSteamID(str);
  if (!isValid) return false;
  return Regx.SteamID64.test(str);
}

async function GetSteamID64FromURL(str: string): Promise<string | null> {
  const m = str.match(Regx.SteamID64);
  if (m) return m[0];
  return m;
}

async function TimeStamp(date: Date = new Date()): Promise<timeStamp> {
  const ts = moment(date);

  const o: timeStamp = {
    Date: ts.format('YYYY-MM-DD'),
    Time: ts.format('HH:mm:ss'),
  };

  return o;
}

function formatNumber(number: number): string {
  return numeral(number).format('0,0');
}

export default {
  TimeStamp,
  isURL,
  isTradeOfferURL,
  isSteamID64,
  isValidSteamID,
  GetSteamID64FromURL,
  formatNumber,
  readJSON,
  readJSONSync,
  sleep,
  SplitArray,
  createPath,
  storeFile,
  WriteFile: storeFile,
  Regex: Regx,
  FastConcat,
  AsyncFastConcat,
};
