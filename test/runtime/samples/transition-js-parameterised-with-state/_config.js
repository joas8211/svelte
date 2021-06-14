export default {
	props: {
		duration: 200
	},

	async test({ assert, component, target, window, raf }) {
		component.visible = true;
		await component.$tick();

		const div = target.querySelector('div');
		assert.equal(div.foo, 0);

		raf.tick(50);
		assert.equal(div.foo, 100);

		raf.tick(100);
		assert.equal(div.foo, 200);

		raf.tick(101);
	}
};
