export default {
	immutable: true,

	html: '<div><h3>Called 1 times.</h3></div>',

	async test({ assert, component, target }) {
		// eslint-disable-next-line no-self-assign
		component.foo = component.foo;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, '<div><h3>Called 2 times.</h3></div>');
	}
};
