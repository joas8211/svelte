export default {
	html: '<div><p></p></div>',

	async test({ assert, component, target }) {
		const { widget } = component;

		assert.equal(widget.show, false);

		widget.show = true;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, '<div><p>Hello</p></div>');

		component.data = 'World';
		await component.$tick();
		assert.htmlEqual(target.innerHTML, '<div><p>World</p></div>');

		widget.show = false;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, '<div><p></p></div>');

		component.data = 'Goodbye';
		await component.$tick();
		assert.htmlEqual(target.innerHTML, '<div><p></p></div>');

		widget.show = true;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, '<div><p>Goodbye</p></div>');
	}
};
