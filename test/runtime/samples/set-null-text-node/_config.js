export default {
	props: { foo: null },

	html: 'foo is null',

	async test({ assert, component, target }) {
		component.foo = 42;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, 'foo is 42');

		component.foo = null;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, 'foo is null');
	}
};
