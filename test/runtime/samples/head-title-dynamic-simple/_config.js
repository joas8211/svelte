export default {
	props: {
		foo: 'A Title'
	},

	async test({ assert, component, target, window }) {
		assert.equal(window.document.title, 'A Title');

		component.foo = 'Also A Title';
		await component.$tick();
		assert.equal(window.document.title, 'Also A Title');
	}
};
