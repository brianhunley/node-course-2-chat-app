const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    // store function result in a variable
    // assert the from field matches
    // assert the text field matches
    // assert createdAt is a number

    const from = 'Admin';
    const text = 'Hello, how are you?';
    const message = generateMessage(from, text);

    // two different ways to test
    // one way
    expect(message.from).toEqual(from);
    expect(message.text).toEqual(text);
    // another way to do the above two assertions
    expect(message).toMatchObject({ from, text });
    // check the createdAt field is a number
    expect(typeof message.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate the correct location message object', () => {
    // store function result in a variable
    // assert the from field matches
    // assert the url field matches
    // assert createdAt is a number

    const from = 'Admin';
    const latitude = 39.7912709;
    const longitude = -84.3226488;
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    const message = generateLocationMessage(from, latitude, longitude);

    // two different ways to test
    // one way
    expect(message.from).toEqual(from);
    expect(message.url).toEqual(url);
    // another way to do the above two assertions
    expect(message).toMatchObject({ from, url });
    // check the createdAt field is a number
    expect(typeof message.createdAt).toBe('number');
  });
});