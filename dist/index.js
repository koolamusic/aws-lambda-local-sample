"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mandler = exports.handler = void 0;
const handler = async (event, context) => {
    // console.log("EVENT: \n" + JSON.stringify(event, null, 2), event.path)
    console.log("EVENT", event.path);
    console.log("overridse", context.logStreamName);
    return context.logStreamName;
};
exports.handler = handler;
/*
 * example Lambda function.
 */
const mandler = async (event, context) => {
    console.log('value1 = ' + event.key1);
    console.log('value2 = ' + event.key2);
    console.log('value3 = ' + event.key3);
    console.log('context = ' + context);
    context.done(null, 'Hello World'); // SUCCESS with message
};
exports.mandler = mandler;
