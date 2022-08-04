const { chunkArray, notN } = require('./chunk');

test('chunkArray function exists', () => {
	expect(chunkArray).toBeDefined();
});

test('Chunk an array of 10 values with len of 2', () => {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const len = 2;
	const chunkedArr = chunkArray(numbers, len);

	expect(chunkedArr).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
});

test('notN function exists', () => {
	expect(notN).toBeDefined();
});

test('Return an array without N', () => {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const n = 2;
	const newArr = notN(numbers, n);

	expect(newArr).toEqual([1, 3, 4, 5, 6, 7, 8, 9, 10])
});