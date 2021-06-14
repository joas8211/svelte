export default {
	skip_if_ssr: true, // uses oncreate

	html: `
		<p>1</p>
		<p>2</p>
	`,

	async test({ assert, component, target }) {
		component.foo = 2;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<p>2</p>
			<p>4</p>
		`);
	}
};
