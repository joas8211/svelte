export default {
	props: {
		visible: true
	},

	async test({ assert, component, target, window, raf }) {
		component.visible = false;
		await component.$tick();
		const div = target.querySelector('div');

		raf.tick(50);
		assert.equal(div.foo, 0.5);

		component.$destroy();

		raf.tick(100);
	}
};
