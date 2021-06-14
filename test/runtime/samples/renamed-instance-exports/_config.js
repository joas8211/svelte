export default {
	async test({ assert, component }) {
		assert.equal(component.bar1, 42);
		assert.equal(component.bar2, 42);
		component.bar1 = 100;
		component.bar2 = 100;
		await component.$tick();
		assert.equal(component.bar1, 42);
		assert.equal(component.bar2, 100);
	}
};
