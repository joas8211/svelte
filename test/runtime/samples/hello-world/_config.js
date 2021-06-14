export default {
	props: {
		name: 'world'
	},

	html: '<h1>Hello world!</h1>',

	async test({ assert, component, target }) {
		component.name = 'everybody';
		await component.$tick();
		assert.htmlEqual(target.innerHTML, '<h1>Hello everybody!</h1>');

		component.$destroy();
		assert.htmlEqual(target.innerHTML, '');
	}
};
