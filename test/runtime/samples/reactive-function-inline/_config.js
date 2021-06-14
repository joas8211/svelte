export default {
	html: '<p>0</p>',

	async test({ assert, component, target }) {
		component.selected = 3;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, '<p>3</p>');
	}
};
