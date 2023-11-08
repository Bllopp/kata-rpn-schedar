const { rpn, rpnDivide} = require('./answer')

describe('Basic operations (+, -, *, /)', () => {
  test('1 + 1 = 2', () => {
    const res = rpn("1 1 +");
    expect(res).toBe(2)
  })

    test('3 + 2 = 1', () => {
    const res = rpn("3 2 -");
    expect(res).toBe(1)
  })

  test('3 * 2 = 6', () => {
    const res = rpn("3 2 *");
    expect(res).toBe(6)
  })

    test('10 / 2 = 5', () => {
    const res = rpn("10 2 /");
    expect(res).toBe(5)
  })

})

describe('throw of errors', () => {
  test('synthax error', () => {
    expect(() => {rpn("1 + 1")}).toThrow("error of syntax")
  })
})

describe('More complex operations (+, -, sqrt, max)', () => {
  test('1 + 1 + 1 + 1 + 1 = 5', () => {
    const res = rpn("1 1 + 1 + 1 + 1 +");
    expect(res).toBe(5)
  })

  test('3 - 2 + 1 + 4 - 2 = 4', () => {
    const res = rpn("3 2 - 1 + 4 + 2 -");
    expect(res).toBe(4)
  })
  
  test('9 sqrt = 3', () => {
    const res = rpn("9 sqrt");
    expect(res).toBe(3)
  })
  test('12 10 14 9 max = 14', () => {
    const res = rpn("12 10 14 9 max");
    expect(res).toBe(14)
  })
})

describe('division by 0', () => {
  test('3/0 throw error', () => {
    // const res = rpnDivide(0,3);
    expect(() => {rpnDivide(0,3)}).toThrow('Division par 0');
  }) 
})
