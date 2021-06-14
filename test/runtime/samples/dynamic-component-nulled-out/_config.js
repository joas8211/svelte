export default {
	html: `
		<p>Foo</p>
	`,

	async test({ assert, component, target }) {
		const Bar = component.Bar;

		component.Bar = null;
		await component.$tick();

		assert.htmlEqual(target.innerHTML, '');

		component.Bar = Bar;
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<p>Foo</p>
		`);
	}
};
