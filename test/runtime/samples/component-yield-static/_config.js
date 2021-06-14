export default {
	html: `
		<b>Hello</b>
	`,

	async test({ assert, component, target }) {
		component.name = 'World';
		await component.$tick();
		assert.htmlEqual( target.innerHTML, `
			<b>Hello</b> World
		` );
	}
};
