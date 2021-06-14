export default {
	async test({ assert, component, target, window, raf }) {
		component.visible = true;
		await component.$tick();

		const div = target.querySelector('div');

		assert.equal(div.foo, 0);
		assert.equal(div.oof, 1);

		raf.tick(50);
		assert.equal(div.foo, 0.5);
		assert.equal(div.oof, 0.5);
	}
};
