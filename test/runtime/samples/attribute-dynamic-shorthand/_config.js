export default {
	html: '<div id="foo"></div>',

	async test({ assert, component, target }) {
		component.id = 'bar';
		await component.$tick();
		assert.equal( target.innerHTML, '<div id="bar"></div>' );
	}
};
