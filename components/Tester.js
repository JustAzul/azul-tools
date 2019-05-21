const moment = require('moment');
const Log = require('./Logger.js');

module.exports = Test;

function Test(testName = "test") {
    this.startedAt = moment();
    this.testName = testName;
    this.endAt = null;
}

Test.prototype.end = function (talk = false) {
    this.endAt = moment();
    Log.Debug(`${this.testName} took ${this.time()}.`, false, talk);
}

Test.prototype.time = function () {
    return this.endAt.diff(this.startedAt, 'millisecond') + "ms";
}