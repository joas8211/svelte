export default {
	async test({ assert, component, raf }) {
		assert.equal(component.count, 0);

		component.arr = ['2'];
		await component.$tick();

		assert.equal(component.count, 1);

		component.arr = ['1', '2'];
		await component.$tick();

		assert.equal(component.count, 2);

		component.arr = ['2', '1'];
		await component.$tick();

		assert.equal(component.count, 2);

		component.arr = [];
		await component.$tick();

		assert.equal(component.count, 0);
	}
};
