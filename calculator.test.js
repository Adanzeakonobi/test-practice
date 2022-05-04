const Calculator  = require('./calculator');

describe('Calculator is performing well', () =>{
    let calculate = new Calculator();

test('adds is', () => {
  expect(calculate.add(1, 2)).toBe(3);
  expect(calculate.add(15, 8)).toBe(23);
  expect(calculate.add(22, 29)).toBe(51);
});

test('subtract is', () => {
    expect(calculate.subtract(7, 4)).toBe(3);
    expect(calculate.subtract(10, 4)).toBe(6);
    expect(calculate.subtract(35, 30)).toBe(5);

  });

  test('divide is', () => {
    expect(calculate.divide(10, 2)).toBe(5);
    expect(calculate.divide(39, 3)).toBe(13);
    expect(calculate.divide(24, 2)).toBe(12);
  });

  test('multiply is', () => {
    expect(calculate.multiply(6, 2)).toBe(12);
    expect(calculate.multiply(7, 4)).toBe(28);
    expect(calculate.multiply(6, 7)).toBe(42);
  });
})
