export default {
	skip_if_ssr: true, // TODO delete this line, once binding works

	html: `
		<p>y: bar</p>
		<p>y: bar</p>
	`,

	async test({ assert, component, target }) {
		component.x = false;
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<p>y: bar</p>
			<p>y: bar</p>
		`);
	}
};
