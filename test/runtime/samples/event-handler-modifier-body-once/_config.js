export default {
	async test({ assert, component, window }) {
		const event = new window.MouseEvent('click');

		await window.document.body.dispatchEvent(event);
		await component.$tick();
		assert.equal(component.count, 1);

		await window.document.body.dispatchEvent(event);
		await component.$tick();
		assert.equal(component.count, 1);
	}
};
