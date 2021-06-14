export default {
	async test({ assert, target, component }) {
		assert.htmlEqual(target.innerHTML, '<span></span>');
		component.enabled = true;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, '<span>enabled</span>');
	}
};
