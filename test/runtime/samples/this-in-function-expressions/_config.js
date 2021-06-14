export default {
	async test({ assert, target, component, window }) {
		const [, btn] = target.querySelectorAll('button');
		const clickEvent = new window.MouseEvent('click');

		await btn.dispatchEvent(clickEvent);
		await component.$tick();

		assert.equal(btn.x, 1);
	}
};
