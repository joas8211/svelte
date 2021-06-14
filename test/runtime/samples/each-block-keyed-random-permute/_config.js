const VALUES = Array.from('abcdefghijklmnopqrstuvwxyz');

function toObjects(array) {
	return array.split('').map(x => ({ id: x }));
}

function permute() {
	const values = VALUES.slice();
	const number = Math.floor(Math.random() * VALUES.length);
	const permuted = [];
	for (let i = 0; i < number; i++) {
		permuted.push(
			...values.splice(Math.floor(Math.random() * (number - i)), 1)
		);
	}

	return permuted.join('');
}

export default {
	props: {
		values: toObjects('abc')
	},

	html: '(a)(b)(c)',

	async test({ assert, component, target }) {
		async function test(sequence) {
			const previous = target.textContent;
			const expected = sequence.split('').map(x => `(${x})`).join('');
			component.values = toObjects(sequence);
			await component.$tick();
			assert.htmlEqual(
				target.innerHTML,
				expected,
				`\n${previous} -> ${expected}\n${target.textContent}`
			);
		}

		// first, some fixed tests so that we can debug them
		await test('abc');
		await test('abcd');
		await test('abecd');
		await test('fabecd');
		await test('fabed');
		await test('beadf');
		await test('ghbeadf');
		await test('gf');
		await test('gc');
		await test('g');
		await test('');
		await test('abc');
		await test('duqbmineapjhtlofrskcg');
		await test('hdnkjougmrvftewsqpailcb');
		await test('bidhfacge');
		await test('kgjnempcboaflidh');
		await test('fekbijachgd');
		await test('kdmlgfbicheja');

		// then, we party
		for (let i = 0; i < 100; i += 1) await test(permute());
	}
};
