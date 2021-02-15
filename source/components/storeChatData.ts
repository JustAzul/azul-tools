import { EOL } from 'os';
import { storeFile, TimeStamp } from 'azul-helper';

async function storeChatData(UserID64: string, Message: string, Bot: Boolean = false, server_timestamp: string, BaseDir: string = "history") {
    const ts = await TimeStamp(new Date(server_timestamp));
    const filePath = BaseDir + `/chat/${ts.Date}/${UserID64}.log`;
    const line = `[${ts.Time}] ${Bot ? "B" : "U"}: ${Message}` + EOL;
    return storeFile(filePath, line);
}

export default storeChatData;