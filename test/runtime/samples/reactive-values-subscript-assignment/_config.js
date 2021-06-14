export default {
	async test({ assert, component }) {
		assert.deepEqual(component.foo, {});
		component.bar = 'hello';
		await component.$tick();
		assert.deepEqual(component.foo, { hello: true });
		component.bar = 'world';
		await component.$tick();
		assert.deepEqual(component.foo, { hello: true, world: true });
		component.bar = false;
		await component.$tick();
		assert.deepEqual(component.foo, { hello: true, world: true });
	}
};
