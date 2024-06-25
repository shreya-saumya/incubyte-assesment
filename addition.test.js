const add = require('./addString')

test('comma seperator will add the string and give number as output', () => {
  expect
  (add('1,2')).toBe(3);
});


test('new line delemeter will add the string and give number as output', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('delemeter Changed to ; should also add the numbers in string and give number as output', () => {
  expect(add('5;1;7')).toBe(13);
});

test('negative number in string should throw error', () => {
  expect(() => add('-5;6;7')).toThrow('negative numbers not allowed');
});

test('should return 0 for an empty string', () => {
        expect(add('')).toBe(0);
});
test('should return single digit for a string of length 1', () => {
        expect(add('5')).toBe(5);
});
test('should return the correct sum of numbers in a string', () => {
        expect(add('4,2,4')).toBe(10);
});

test('should throw an error for multiple negative numbers', () => {
    expect(() => add('-1,-2,-3')).toThrow('negative numbers not allowed: -1, -2, -3');
});

test('should handle newline as a delimiter', () => {
        expect(add('1\n2,3')).toBe(6);
});
test('should handle all newline as a delimiter', () => {
        expect(add('1\n2,\n4')).toBe(7);
});


