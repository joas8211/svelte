export default {
	props: {
		titles: [{ name: 'a' }, { name: 'b' }, { name: 'c' }]
	},

	html: `
		<p>a</p>
		<p>b</p>
		<p>c</p>
	`,

	async test({ assert, component, target }) {
		component.titles = [{ name: 'b' }, { name: 'c' }];
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<p>b</p>
			<p>c</p>
		`);

		component.titles = [{ name: 'c' }];
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<p>c</p>
		`);

	}
};
