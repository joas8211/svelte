export default {
	props: {
		props: {
			a: 1
		}
	},

	html: '',

	async test({ assert, component, target }) {
		component.props = {
			a: 2
		};
		await component.$tick();

		assert.htmlEqual(target.innerHTML, '');
	}
};
