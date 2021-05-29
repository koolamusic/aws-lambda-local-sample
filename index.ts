export const handler = async (event: any, context: any): Promise<any> => {
    // console.log("EVENT: \n" + JSON.stringify(event, null, 2), event.path)
    console.log("EVENT", event.path)
    console.log("overridse", context.logStreamName)
    return event
}




/*
 * example Lambda function.
 */

export const mandler = async (event: { key1: string; key2: string; key3: string; }, context: {done: Function}) => {
    console.log('value1 = ' + event.key1);
    console.log('value2 = ' + event.key2);
    console.log('value3 = ' + event.key3);
    console.log('context = ' + context);
    context.done(null, 'Hello World');  // SUCCESS with message
};
