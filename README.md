## Methods

### storeChatData(UserID64, Message, Bot, server_timestamp)

Smart use of `storeFile()` and `TimeStamp()` to save SteamChat logs, with smooth organization by dates, times, and SteamIDS.
* `UserID64` is the SteamID64 of user
* `Message` is the message content
* `Bot` True if its a bot message (bot has sent the message), false if otherwise (if null or ommited, will be false)
* `server_timestamp` UTC timestamp that you need to be stored, if null or ommited, will pick the current UTC system time.

### storeFile(filePath, fileContent, flag)

Safe store a file to a desired `filePath`, and auto create any extra directory if needed, it uses `graceful-js` so we don't need to worry about commom issues.
* `filePath` is the target filePath
* `fileContent` is the file content, please beware that it don't handle json, so you need to use `JSON.stringify()`
* `flag` it the fs flag, commom ones are `w` for writing, and `a` for appending (if null or ommited, will pick appending)
