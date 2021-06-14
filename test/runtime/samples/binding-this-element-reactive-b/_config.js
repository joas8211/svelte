export default {
	skip_if_ssr: true,

	html: `
		<div>The text is hello</div>
		<h1>hello</h1>
	`,

	async test({ assert, component, target }) {
		component.visible = false;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<div>The text is missing</div>
		`);

		component.visible = true;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<div>The text is hello</div>
			<h1>hello</h1>
		`);
	}
};
