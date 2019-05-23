# Azul Tools 

Some tools that i use in my bot/projects..

### Prerequisites

I recommend to try this only in node V10/LTS or above.

### Installing

```
npm install azul-tools
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Almost every Method returns a promise, so you can use `await` or `then`
* Thats all folks!

## Constructors

### Tester(string)
Usefully to test how much time it will get to do something
* `string` the name of the tester, use this to identify things
#### Usage
```
const AzulTools = require('azul-tools);
const Test = new AzulTools.Tester('cool function');

**do something that you want to know how long will take**

Test.end(true); // will say on console => cool function took (x)ms, where (x) is the time that it tooks
```

## Methods

### sleep(ms)
Returns a promise that is solved after `ms` miliseconds, goot to use `await` or `then`
* `ms` time in miliseconds

### isURL(str)
Checks if str is a valid valid url, by returning true or false
* `str` desired string to do the magic

### isTradeOfferURL(str)
Checks if str is a valid trade offer url, by returning true or false
* `str` desired string to do the magic

### isSteamID64(str)
Checks if str is a SteamID64, by returning true or false
* `str` desired string to do the magic

### GetSteamID64FromURL(str)
Returns the first SteamID64 found in a desired string, can return null if didn't manage to find any
* `str` desired string to do the magic

### TimeStamp(date)
Return an object with a formated date `YYYY-MM-DD` and time `HH:mm:ss` of the date `date` or the current system time if ommited.
* `date` date to be formated, if null or ommited, will use current system time

### formatNumber(number)
Format a number to make it more readable (e.g transforms 9999 to 9,999)
* `number` number to be formated

### readJSON(filepath)
Safe load a JSON file and parse it, if file doesn't exists, or if it fails to parse the json(bad json), it will return an emptry json.
* `filepath` obvious, the filepath..

### Log(String) `blue`
#### Log.Warn(String) `yellow`
#### Log.Trade(String) `green`
#### Log.Debug(String, json, DebugMode) `grey`
#### Log.Error(String) `red`

Smart use of [`storeFile()`](#storefilefilepath-filecontent-flag), [`TimeStamp()`](#timestampdate) and [`colors.js`](https://github.com/Marak/colors.js) to save logs, with smooth organization by dates, times and sections
* `String` Log message you want to display on the console, and store.
* `json` If you passing a JSON content, set to true, it will use `JSON.stringify()` on `String`.
* `DebugMode` True if you want the console to display the message, false otherwise, but even if false, it will save the logs.

### storeChatData(UserID64, Message, Bot, server_timestamp)

Smart use of [`storeFile()`](#storefilefilepath-filecontent-flag) and [`TimeStamp()`](#timestampdate) to save SteamChat logs, with smooth organization by dates, times, and SteamIDS.
* `UserID64` is the SteamID64 of user
* `Message` is the message content
* `Bot` True if its a bot message (bot has sent the message), false if otherwise (if null or ommited, will be false)
* `server_timestamp` UTC timestamp that you need to be stored, if null or ommited, will pick the current UTC system time.

### storeFile(filePath, fileContent, flag)

Safe store a file to a desired `filePath`, and auto create any extra directory if needed, it uses `graceful-js` so we don't need to worry about commom issues.
* `filePath` is the target filePath
* `fileContent` is the file content, please beware that it don't handle json, so you need to use `JSON.stringify()`
* `flag` it the fs flag, commom ones are `w` for writing, and `a` for appending (if null or ommited, will pick appending)
