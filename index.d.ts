/// <reference types="node" />
import { PathLike } from 'graceful-fs';
import type { Mode, Options } from 'mkdirp';

export type LogTypes = 'info' | 'warn' | 'trade' | 'debug' | 'error';

export interface cache {
    [Key: string]: unknown;
}

export interface timeouts {
    [Key: string]: NodeJS.Timeout
}
export type ArraySplitedValue = unknown[];

export interface timeStamp {
  Date: string,
  Time: string
}


declare type Log = (log: string) => Promise<void>;

declare interface Loggers {
    Error: (log: string) => Promise<void>,
    Trade: (log: string) => Promise<void>,
    Warn: (log: string) => Promise<void>,
    Debug: (log: string, json?: boolean, DebugMode?: boolean) => Promise<void>
}

declare namespace AzulHelper {

    export function TimeStamp(date?: Date): Promise<timeStamp>;

    export function isURL(str: string): Promise<boolean>;
    export function FastConcat(BaseArray: any[], ToConcatArray: any[]): void;
    export function AsyncFastConcat(BaseArray: any[], ToConcatArray: any[]): Promise<void>;
    export function isTradeOfferURL(str: string): Promise<boolean>;
    export function isSteamID64(str: string): Promise<boolean>;
    export function isValidSteamID(value: string): Promise<boolean>;
    export function GetSteamID64FromURL(str: string): Promise<string | null>;
    export function formatNumber(number?: number): string;
    export function readJSON(Filepath: PathLike): Promise<Promise<Record<string, unknown>>>;
    export function readJSONSync(Filepath: PathLike): Promise<Promise<Record<string, unknown>>>;
    export function sleep(ms: number): Promise<void>;
    export function SplitArray(Array: any[], MaxSize: number): Promise<ArraySplitedValue>;
    export function storeFile(filePath: PathLike, content: string | NodeJS.ArrayBufferView, flag?: string): Promise<void>;
    export function createPath(dir: PathLike, opts?: Mode | Options): Promise<string | undefined>;
    export function WriteFile(filePath: PathLike, content: string | NodeJS.ArrayBufferView, flag?: string): Promise<void>;
    export function storeChatData(UserID64: string, Message: string, Bot?: boolean, server_timestamp?: string, BaseDir?: string): Promise<void>;
    export function Pattern(): void;

    export const Log: Log & Loggers;

    export const Regex: {
        SteamID64: RegExp;
        TradeOfferUrl: RegExp;
        Url: RegExp;
    };

    export const Cache: {
        Get: (KeyID: string) => unknown,
        Set: (KeyID: string, Value: unknown, Expiration: number) => void
    };
}

export = AzulHelper;
