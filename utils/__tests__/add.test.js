const { add } = require('../add')

it('should add', () => {
  expect(add(1, 3)).toBe(1);
})
it('should add with should', () => {
  expect(add(1, 3, true)).toBe(4);
})