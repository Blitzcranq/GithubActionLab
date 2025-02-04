test('true is true', () => {
	expect(true).toBe(true);
});

test('addition works', () => {
	const add = (a, b) => a + b;
	expect(add(1, 2)).toBe(3);
});