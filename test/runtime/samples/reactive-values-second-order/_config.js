export default {
	async test({ assert, component, target }) {
		assert.equal(component.qux, 2);

		component.foo = 2;
		await component.$tick();
		assert.equal(component.qux, 4);
	}
};
