export default {
	props: {
		props: {
			a: 1
		}
	},

	html: `
		<p>a: 1</p>
	`,

	async test({ assert, component, target }) {
		component.props = {
			a: 2
		};
		await component.$tick();

		assert.htmlEqual(target.innerHTML, '<p>a: 2</p>');
	}
};
