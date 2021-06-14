export default {
	props: {
		titles: [{ name: 'b' }, { name: 'c' }]
	},

	html: `
		<p>b</p>
		<p>c</p>
	`,

	async test({ assert, component, target }) {
		component.titles = [{ name: 'a' }, { name: 'b' }, { name: 'c' }];
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<p>a</p>
			<p>b</p>
			<p>c</p>
		`);
	}
};
