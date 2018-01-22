const expect = require('expect');

const { generateMessage } = require('./message');

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