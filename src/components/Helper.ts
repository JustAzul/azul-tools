import moment from 'moment';
import numeral from 'numeral';
import SteamID from 'steamid';
import createPath from 'mkdirp';
import { PathLike, createWriteStream, existsSync } from 'graceful-fs';
import { dirname } from 'path';

// eslint-disable-next-line import/no-unresolved, import/extensions
import readJSON from './ReadJson';
// eslint-disable-next-line import/no-unresolved, import/extensions
import readJSONSync from './SyncReadJson';

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

function FastConcat(BaseArray: [], ToConcatArray: []) {
  const BaseLenght = BaseArray.length;
  // eslint-disable-next-line no-param-reassign
  BaseArray.length += ToConcatArray.length;
  for (let i = 0; i < ToConcatArray.length; i += 1) {
    // eslint-disable-next-line no-param-reassign
    BaseArray[BaseLenght + i] = ToConcatArray[i];
  }
}

// eslint-disable-next-line no-undef
async function storeFile(Path: PathLike, content: string | NodeJS.ArrayBufferView, flag: string = 'a'): Promise<void> {
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

function SplitArray(Array: [], MaxSize: number): Promise<any[][]> {
  return new Promise((resolve) => {
    const SplitedArray: any[][] = [];

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

async function isURL(str: string) {
  return Regx.Url.test(str);
}

async function isTradeOfferURL(str: string) {
  for (let i = 0; i < Regx.TradeOfferUrl.length; i += 1) {
    const Regex = Regx.TradeOfferUrl[i];
    const Result = Regex.test(str);
    if (Result) return true;
  }

  return false;
}

async function isValidSteamID(value: any) {
  try {
    return new SteamID(value).isValid();
  } catch {
    return false;
  }
}

async function isSteamID64(str: string) {
  const isValid = await isValidSteamID(str);
  if (!isValid) return false;
  return Regx.SteamID64.test(str);
}

async function GetSteamID64FromURL(str: string) {
  const m = str.match(Regx.SteamID64);
  if (m) return m[0];
  return m;
}

async function TimeStamp(date: Date = new Date()) {
  const ts = moment(date);

  const o = {
    Date: ts.format('YYYY-MM-DD'),
    Time: ts.format('HH:mm:ss'),
  };

  return o;
}

function formatNumber(number: number = 1000) {
  return numeral(number).format('0,0');
}

const Helper = {
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

export default Helper;
