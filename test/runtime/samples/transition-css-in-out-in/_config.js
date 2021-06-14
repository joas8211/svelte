export default {
	async test({ assert, component, target, window, raf }) {
		component.visible = true;
		await component.$tick();
		const div = target.querySelector('div');

		assert.equal(div.style.animation, '__svelte_3809512021_0 100ms linear 0ms 1 both');

		raf.tick(50);
		component.visible = false;
		await component.$tick();

		// both in and out styles
		assert.equal(div.style.animation, '__svelte_3809512021_0 100ms linear 0ms 1 both, __svelte_3750847757_0 100ms linear 0ms 1 both');

		raf.tick(75);
		component.visible = true;
		await component.$tick();

		// reset original styles
		assert.equal(div.style.animation, '__svelte_3809512021_1 100ms linear 0ms 1 both');
	}
};
