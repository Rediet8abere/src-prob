const lib = require('../umd/str-prob')


test('Testing capitalizeFirst', () => {
  expect(lib.capitalizeFirst('hello')).toBe('Hello')

})

test('Testing allCaps', () => {
  expect(lib.allCaps('HELLO')).toBe('HELLO')
})

test('Testing capitalizeWords', () => {
  expect(lib.capitalizeWords('in this world we do all things right')).toBe('In This World We Do All Things Right')
})

test('Testing capitalizeHeadLine', () => {
  expect(lib.capitalizeHeadLine('we do all things in the name of god by the will of people')).toBe('We Do All Things in the Name Of God by the Will Of People')
})

test('Testing removeExtraSpace', () => {
  expect(lib.removeExtraSpace('   Hello    world!   ')).toBe('Hello world!')
})

test('Testing kebobCase', () => {
  expect(lib.kebobCase('Hello world')).toBe('Hello-world')
})

test('Testing snakeCase', () => {
  expect(lib.snakeCase('what the heck')).toBe('what_the_heck')
})

test('Testing camelCase', () => {
  expect(lib.camelCase('what the heck')).toBe('whatTheHeck')
})

test('Testing shift', () => {
  expect(lib.shift('what the heck', 1)).toBe('hat the heckw')
})

test('Testing makeHashTag', () => {
  expect(lib.makeHashTag('what the heck')).toBe('#WhatTheHeck')
})

test('Testing isEmpty', () => {
  expect(lib.isEmpty('what the heck')).toBe(false)
})






