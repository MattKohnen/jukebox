const combineCollections = require('./combineCollections')

test('testing', () => {
    expect(combineCollections([1, 2, 3], [4, 5, 6], [7, 8, 9])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})
