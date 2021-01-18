const {writeFile} = require('graceful-fs');
const {duration} = require('moment');
const {normalize, dirname:GetDirName} = require('path');
const mkdirp = require('mkdirp');
const Log = require('./Logger.js');

const { EOL } = require('os');
const { TimeStamp } = require('azul-helper');

module.exports = {
    storeFile: storeFile,
    storeChatData: storeChatData
}

async function storeChatData(UserID64, Message, Bot = false, server_timestamp) {
    const ts = await TimeStamp(server_timestamp);
    const BaseDir = "history";

    const filePath = BaseDir + `/chat/${ts.Date}/${UserID64}.log`;
    const line = `[${ts.Time}] ${Bot ? "B" : "U"}: ${Message}` + EOL;
    return storeFile(filePath, line);
}

//a = append, w = write
async function storeFile(filePath, content, f = 'a') {
    filePath = await normalize(`${process.cwd()}/${filePath}`);

    const o = {
        "flag": f
    };

    return new Promise(resolve => {

        writeFile(filePath, content, o, async err => {
            if (!err) return resolve();

            if (err.code == "ENOENT") {
                const dirname = await GetDirName(filePath);
                await createPath(dirname);
                return resolve(storeFile(...arguments));
            }

            Log.Debug(`Failed to create path '${filePath}', trying again in a sec => ${err}`);

            return setTimeout(() => {
                resolve(storeFile(...arguments));
            }, duration(2, 'seconds'))

        });
    })
}

function createPath(Path) {
    return new Promise(resolve => {
        mkdirp(Path, err => {
            if (!err) return resolve();
            //if (err.code == "EEXIST") return resolve();

            Log.Debug(`Failed to create path '${Path}', trying again in a sec => ${err}`);

            return setTimeout(() => {
                resolve(createPath(...arguments));
            }, duration(2, 'seconds'))
        })
    })
}
