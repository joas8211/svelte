export default {
	props: {
		foo: true,
		bar: false
	},

	html: `
		<p>foo</p>
		<p>not bar</p>
	`,

	async test({ assert, component, target }) {
		component.foo = false;
		await component.$tick();
		assert.htmlEqual( target.innerHTML, `
			<p>not foo</p>
			<p>not bar</p>
		` );

		component.bar = true;
		await component.$tick();
		assert.htmlEqual( target.innerHTML, `
			<p>not foo</p>
			<p>bar</p>
		` );

		component.foo = true;
		await component.$tick();
		assert.htmlEqual( target.innerHTML, `
			<p>foo</p>
			<p>bar</p>
		` );
	}
};
