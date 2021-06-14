export default {
	props: {
		a: 1,
		b: 2,
		c: 3,
		d: 4
	},

	html: `
		<p>4</p>
	`,

	async test({ assert, component, target }) {
		component.d = 5;
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<p>5</p>
		`);
	}
};
