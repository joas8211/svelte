export default {
	props: {
		props: {
			foo: 'lol',
			baz: 40 + 2
		}
	},

	html: `
		<div><p>foo: lol</p>
		<p>baz: 42</p>
		<p>qux: named</p>
	`,

	async test({ assert, component, target }) {
		const html = `
			<div><p>foo: undefined</p>
			<p>baz: undefined</p>
			<p>qux: named</p>
		`;

		// test undefined
		component.props = undefined;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, html);

		// set object props
		component.props = this.props.props;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, this.html);

		// test null
		component.props = null;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, html);

		// set object props
		component.props = this.props.props;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, this.html);

		// test boolean
		component.props = true;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, html);

		// set object props
		component.props = this.props.props;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, this.html);

		// test number
		component.props = 123;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, html);

	}
};
