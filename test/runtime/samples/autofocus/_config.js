export default {
	html: '',

	async test({ assert, component, target, window }) {
		component.visible = true;
		await component.$tick();
		assert.equal(target.querySelector('input'), window.document.activeElement);
	}
};
