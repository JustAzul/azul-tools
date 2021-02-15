
declare namespace Logger {
    export function Debug(log: string, json?: Boolean, DebugMode?: Boolean): Promise<void>
    export function Error(log: string): Promise<void>
    export function Trade(log: string): Promise<void>
    export function Warn(log: string): Promise<void>
    export default function(log: string): Promise<void>
}

export = Logger;