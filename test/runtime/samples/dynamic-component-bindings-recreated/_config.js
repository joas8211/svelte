export default {
	props: {
		x: true,
		foo: 'one'
	},

	html: `
		<p>green one</p>
	`,

	async test({ assert, component, target }) {
		component.x = false;
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<p>red one</p>
		`);

		component.foo = 'two';
		component.x = true;
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<p>green two</p>
		`);
	}
};
