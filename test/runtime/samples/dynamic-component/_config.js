export default {
	props: {
		x: true
	},

	html: `
		<p>true, therefore Foo</p>
	`,

	async test({ assert, component, target }) {
		component.x = false;
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<p>false, therefore Bar</p>
		`);
	}
};
