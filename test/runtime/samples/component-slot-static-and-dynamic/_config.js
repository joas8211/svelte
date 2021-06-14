export default {
	html: `
		<div>
			<span slot="a">static</span>
			<span slot="b">0</span>
		</div>
	`,

	async test({ assert, component, target }) {
		component.dynamic += 1;
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<div>
				<span slot="a">static</span>
				<span slot="b">1</span>
			</div>
		`);
	}
};
