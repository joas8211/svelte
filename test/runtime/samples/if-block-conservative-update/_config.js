let count = 0;

export default {
	props: {
		foo: 'potato',
		fn: () => {
			count += 1;
			return true;
		}
	},

	html: '<p>potato</p>',

	async test({ assert, component, target }) {
		assert.equal(count, 1);

		component.foo = 'soup';
		await component.$tick();
		assert.equal(count, 1);

		assert.htmlEqual(target.innerHTML, '<p>soup</p>');
	}
};
