export default {
	async test({ assert, component, target, window, raf }) {
		component.visible = true;
		await component.$tick();
		const div = target.querySelector('div');

		raf.tick(25);

		component.visible = false;
		await component.$tick();

		raf.tick(26);
		assert.ok(~div.style.animation.indexOf('25ms'));
	}
};
