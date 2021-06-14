export default {
	props: {
		x: 1
	},

	html: `
		<p>Foo 1</p>
	`,

	async test({ assert, component, target }) {
		component.x = 2;
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<p>Foo 2</p>
		`);
	}
};
