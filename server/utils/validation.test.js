// challenge

// import isRealString

// 3 test cases
// isRealString
// should reject non-string values
// should reject strings with only spaces
// should allow strings with non-space characters

const expect = require('expect');

const { isRealString } = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    const str = 123;
    const result = isRealString(str);

    expect(result).toBe(false);
  });

  it('should reject strings with only spaces', () => {
    const str = '    ';
    const result = isRealString(str);

    expect(result).toBe(false);
  });

  it('should allow strings with non-space characters', () => {
    const str = '   Brian   ';
    const result = isRealString(str);

    expect(result).toBe(true);
  });
});