const { EOL } = require('os');
const { TimeStamp, storeFile } = require('azul-helper');

async function storeChatData(UserID64, Message, Bot = false, server_timestamp) {
    const ts = await TimeStamp(server_timestamp);
    const BaseDir = "history";

    const filePath = BaseDir + `/chat/${ts.Date}/${UserID64}.log`;
    const line = `[${ts.Time}] ${Bot ? "B" : "U"}: ${Message}` + EOL;
    return storeFile(filePath, line);
}

module.exports = storeChatData;