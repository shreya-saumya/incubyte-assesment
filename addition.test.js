const add = require('./addString')

test('comma seperator will add the string and give number as output', () => {
  expect
  (add('1,2')).toBe(3);
});


test('new line delemeter will add the string and give number as output', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('new line delemeter will add the string and give number as output', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('negative number in string should throw error', () => {
  expect(add('-5;6;7')).toThrow('negative numbers not allowed');
});


