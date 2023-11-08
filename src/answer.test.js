const getAnswer = require('./answer')

describe('getting answers', () => {
  test('it returns 42', () => {
    const res = getAnswer()
    expect(res).toBe(42)
  })
})
