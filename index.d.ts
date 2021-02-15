
import type {TimeStampResult, Regs} from 'azul-helper';

declare namespace AzulTools {
    
    interface cache {
        Get(KeyID: string): any,
        Set(KeyID: string, Value: any, Expiration: number): void
    }

    interface Logs extends Object {
        Debug(log: string, json?: Boolean, DebugMode?: Boolean): Promise<void>,
        Error(log: string): Promise<void>,
        Trade(log: string): Promise<void>,
        Warn(log: string): Promise<void>
    }

    export function storeChatData(UserID64: string, Message: string, Bot?: Boolean, server_timestamp?: string, BaseDir?: string): Promise<void>
    export const Cache: cache
    export const Log: Logs | ((log: string) => void)

    export function TimeStamp(date?: Date): Promise<TimeStampResult>
    export function isURL(str: string): Promise<Boolean>
    export function isTradeOfferURL(str: string): Promise<Boolean>
    export function isSteamID64(str: string): Promise<Boolean>
    export function isValidSteamID(value: any): Promise<Boolean>
    export function GetSteamID64FromURL(str: string): Promise<string | null>
    export function formatNumber(number: number): string
    export function readJSON(Filepath: PathLike): Promise<JSON>
    export function sleep(ms: number): Promise<void>
    export function SplitArray(Array: [], MaxSize: number): Promise<[[]]>
    export function createPath(dir: string, opts?: Mode | Options): Promise<string | undefined>
    export function storeFile(filePath: PathLike, content: string | NodeJS.ArrayBufferView, flag?: string)
    export function WriteFile(filePath: PathLike, content: string | NodeJS.ArrayBufferView, flag?: string)
    
    export const Regx: Regs
}

export = AzulTools;