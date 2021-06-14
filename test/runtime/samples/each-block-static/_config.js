export default {
	props: {
		items: []
	},

	html: '',

	async test({ assert, component, target }) {
		component.items = ['x'];
		await component.$tick();
		assert.htmlEqual(target.innerHTML, 'foo');
	}
};
