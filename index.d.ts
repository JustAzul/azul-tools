/// <reference types="node" />
import { PathLike } from 'graceful-fs';
import type { Mode, Options } from 'mkdirp';

declare type Log = (log: string) => Promise<void>;

declare interface Loggers {
    Error: (log: string) => Promise<void>,
    Trade: (log: string) => Promise<void>,
    Warn: (log: string) => Promise<void>,
    Debug: (log: string, json?: boolean, DebugMode?: boolean) => Promise<void>
}

declare namespace AzulHelper {

    export function TimeStamp(date?: Date): Promise<{
        Date: string;
        Time: string;
    }>;

    export function isURL(str: string): Promise<boolean>;
    export function FastConcat(BaseArray: [], ToConcatArray: []): void;
    export function AsyncFastConcat(BaseArray: [], ToConcatArray: []): Promise<void>;
    export function isTradeOfferURL(str: string): Promise<boolean>;
    export function isSteamID64(str: string): Promise<boolean>;
    export function isValidSteamID(value: any): Promise<boolean>;
    export function GetSteamID64FromURL(str: string): Promise<string | null>;
    export function formatNumber(number?: number): string;
    export function readJSON(Filepath: PathLike): Promise<Object>;
    export function readJSONSync(Filepath: PathLike): Promise<Object>;
    export function sleep(ms: number): Promise<void>;
    export function SplitArray(Array: [], MaxSize: number): Promise<any[][]>;
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
        Get: (KeyID: string) => any,
        Set: (KeyID: string, Value: any, Expiration: number) => void
    };
}

export = AzulHelper;
