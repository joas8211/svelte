export default {
	html: 'one',

	async test({ assert, component, target }) {
		component.text = 'two';
		await component.$tick();
		assert.htmlEqual(target.innerHTML, 'two');
	}
};
