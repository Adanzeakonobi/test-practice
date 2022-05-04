const { stringLength, reverseString, capitalize } = require('./string');

test('get string length', () => {
    expect(stringLength('adaobi')).toBe(6);
});

test('Throw error string length', () => {
    expect(()=>stringLength('')).toThrow(Error);
});

test('Throw error string length', () => {
    expect(()=>stringLength('stringlenth')).toThrow(Error);
  });

  test('reverse the string character', () => {
    expect(reverseString('reverse')).toBe('esrever');
});

test('The first character should be capitalized',()=>{
    const string = 'capitalize';
    expect(capitalize(string)).toBe('Capitalize');
})
