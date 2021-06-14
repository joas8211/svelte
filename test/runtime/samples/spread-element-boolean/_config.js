export default {
	props: {
		props: {
			disabled: true
		}
	},

	html: `
		<button disabled>click me</button>
	`,

	async test({ assert, component, target }) {
		const button = target.querySelector('button');

		assert.ok(button.disabled);

		component.props = { disabled: false };
		await component.$tick();

		assert.htmlEqual(
			target.innerHTML,
			'<button>click me</button>'
		);
		assert.ok(!button.disabled);
	}
};
