export default {
	props: {
		foo: true
	},

	html: '<div>A wild component appears</div>',

	async test({ assert, component, target }) {
		component.foo = false;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, '');
	}
};
