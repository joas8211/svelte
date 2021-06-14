export default {
	html: `
		<div><p>Hello</p></div>
	`,

	async test({ assert, component, target }) {
		assert.equal( component.data, 'Hello' );

		component.data = 'World';
		await component.$tick();
		assert.equal( component.data, 'World' );
		assert.htmlEqual( target.innerHTML, `
			<div><p>World</p></div>
		` );
	}
};
