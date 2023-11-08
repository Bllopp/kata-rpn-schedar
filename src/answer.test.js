const {getAnswer, getStack, add, rpn} = require('./answer')

describe('getting answers', () => {
  test('it returns 42', () => {
    const res = getAnswer()
    expect(res).toBe(42)
  })
})

describe('get stack', () => {
  test('get stack', () => {
    rpn("1 1 +");
    const res = getStack();
    expect(res).toBe([1,1])
  })
})

describe('add number', () => {
  test('1 + 1 = 2', () => {
    const res = rpn("");
    expect(res).toBe(2)
  })
})

describe('soustract number', () => {
  test('3 + 2 = 1', () => {
    const res = rpn("3 2 -");
    expect(res).toBe(1)
  })
})