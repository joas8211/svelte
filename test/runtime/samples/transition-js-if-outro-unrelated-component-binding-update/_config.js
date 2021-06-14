export default {
	async test({ assert, target, component, window, raf }) {
		const button = target.querySelector('button');
		const event = new window.MouseEvent('click');
		await button.dispatchEvent(event);
		await component.$tick();
		raf.tick(500);
		assert.htmlEqual(target.innerHTML, '');
	}
};
