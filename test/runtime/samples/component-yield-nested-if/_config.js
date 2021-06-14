export default {
	html: `
		One
		Inner
	`,

	async test({ assert, component, target }) {
		component.foo = false;
		await component.$tick();
		assert.htmlEqual( target.innerHTML, '' );

		component.foo = true;
		await component.$tick();
		assert.htmlEqual( target.innerHTML, 'One\nInner' );
	}
};
