const lib = require('./index')

test('Testing Str-Lib', () => {
  expect(lib.capitalizeFirst('hello')).toBe('Hello')
  expect(lib.allCaps('HELLO')).toBe('HELLO')
  expect(lib.capitalizeWords('in this world we do all things right')).toBe('In This World We Do All Things Right')
  expect(lib.capitalizeHeadLine('we do all things in the name of god by the will of people')).toBe('We Do All Things in the Name Of God by the Will Of People')
  expect(lib.removeExtraSpace('   Hello    world!   ')).toBe('Hello world!')
  expect(lib.kebobCase('Hello world')).toBe('Hello-world')
  expect(lib.snakeCase('what the heck')).toBe('what_the_heck')
  expect(lib.camelCase('what the heck')).toBe('whatTheHeck')
  expect(lib.shift('what the heck', 1)).toBe('hat the heckw')
  expect(lib.makeHashTag('what the heck')).toBe('#WhatTheHeck')
  expect(lib.isEmpty('what the heck')).toBe(false)

})
