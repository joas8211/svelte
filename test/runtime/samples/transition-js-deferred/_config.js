export default {
	async test({ assert, component, target, raf }) {
		component.visible = true;
		await component.$tick();

		return Promise.resolve().then(() => {
			const div = target.querySelector('div');
			assert.equal(div.foo, 0);

			raf.tick(50);
			assert.equal(div.foo, 0.5);
		});
	}
};
