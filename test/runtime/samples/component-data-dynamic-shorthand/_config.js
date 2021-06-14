export default {
	props: {
		foo: 42
	},

	html: '<div><p>foo: 42</p></div>',

	async test({ assert, component, target }) {
		component.foo = 99;
		await component.$tick();

		assert.equal( target.innerHTML, '<div><p>foo: 99</p></div>' );
	}
};
