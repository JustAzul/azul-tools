/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { EOL } from 'os';
// @ts-expect-error unfortunately we have -> "import-extensions/no-unresolved"
import { TimeStamp, storeFile } from './Helper';

// eslint-disable-next-line camelcase
async function storeChatData(UserID64: string, Message: string, Bot = false, server_timestamp: string, BaseDir = 'history'): Promise<void> {
  const ts = await TimeStamp(new Date(server_timestamp));
  const filePath = `${BaseDir}/chat/${ts.Date}/${UserID64}.log`;
  const line = `[${ts.Time}] ${Bot ? 'B' : 'U'}: ${Message}${EOL}`;
  return storeFile(filePath, line);
}

export default storeChatData;
