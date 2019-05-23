# Azul Tools 

Some tools that i use in my bot/projects..

### Prerequisites

I recommend to try this only in node V10/LTS or above.

### Installing

```
npm install azul-tools
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Almost every Method returns a promise
* thats all folks

## Methods

### Log(String)

Smart use of `storeFile()`, `TimeStamp()` and `colour module` to save logs, with smooth organization by dates, times and sections
* `String` Log message you want to display on the console, and store.

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
