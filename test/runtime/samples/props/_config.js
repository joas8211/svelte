export default {
	props: {
		x: 1
	},

	html: `
		<p>{"x":1}</p>
	`,

	async test({ assert, component, target }) {
		component.x = 2;
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<p>{"x":2}</p>
		`);
	}
};
