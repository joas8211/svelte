export default {
	html: `
		<div>A wild component appears</div>
		<p>x</p>
		<input type=text>
	`,

	ssrHtml: `
		<div>A wild component appears</div>
		<p>x</p>
		<input type=text value=x>
	`,

	async test({ assert, component, target }) {
		component.x = 'y';
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<div>A wild component appears</div>
			<p>y</p>
			<input type=text>
		`);
	}
};
