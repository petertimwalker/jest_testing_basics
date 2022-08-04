const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
	expect(functions.add(2, 2)).toBe(4);
});

// not 
test('Adds 2 + 2 to NOT equal 5', () => {
	expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull
test('Should be null', () => {
	expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
	expect(functions.checkValue(null)).toBeFalsy();
});

// toEqual
test('Should be Pete Walker object', () => {
	expect(functions.createUser()).toEqual({firstName: 'Pete', lastName: 'Walker'});
});

// Less than and greater than
test('Should be under 1600', () => {
	const load1 = 800;
	const load2 = 700;
	expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test('There is no I in team', () => {
	expect('team').not.toMatch(/I/i);
});

// Arrays
test('Admin should be in usernames', () => {
	usernames = ['john', 'karen', 'admin'];
	expect(usernames).toContain('admin');
});

// Working with async data
test('User fetched name should be Leanne Graham', () => {
	expect.assertions(1);
	return functions.fetchUser().then(data => {
		expect(data.name).toEqual('Leanne Graham');
	});
});






























