const { countItems } = require('./__mocks__/items_test.js');

const items = [
  {
    name: 'name1',
    id: 1,
  },
  {
    name: 'name2',
    id: 2,
  },
  {
    name: 'name3',
    id: 3,
  },
];

describe('check number of dogs', () => {
  test('add three items and get the length of the array', () => {
    expect(countItems(items)).toBe(3);
  });
});