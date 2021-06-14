export default {
	html: 'b baz',
	async test({ assert, component, target }) {
		component.foo = true;
		await component.$tick();
		assert.htmlEqual(
			target.innerHTML,
			'a baz'
		);
	}
};
