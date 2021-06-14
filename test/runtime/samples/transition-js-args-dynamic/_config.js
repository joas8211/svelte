export default {
	async test({ assert, component, target, window, raf }) {
		component.visible = true;
		await component.$tick();

		const div = target.querySelector('div');

		assert.equal(div.value, 0);

		raf.tick(200);

		div.value = 'test';
		component.visible = false;
		await component.$tick();
		assert.equal(div.value, 'test');
	}
};
