export default {
	props: {},

	html: `
		<div><p>i: 1</p>
		<p>foo: foo</p>
		<p>qux: named</p>
	`,

	async test({ assert, component, target }) {
		component.foo = 'lol';
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<div><p>i: 2</p>
			<p>foo: lol</p>
			<p>qux: named</p>
		`);
	}
};
