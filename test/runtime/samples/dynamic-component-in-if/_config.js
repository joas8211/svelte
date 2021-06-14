export default {
	html: `
		<p>Foo</p>
	`,

	async test({ assert, component, target }) {
		component.x = component.Bar;
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<p>Bar</p>
		`);
	}
};
