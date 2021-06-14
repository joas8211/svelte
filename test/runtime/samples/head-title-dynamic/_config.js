export default {
	props: {
		adjective: 'custom'
	},

	async test({ assert, component, target, window }) {
		assert.equal(window.document.title, 'a custom title');

		component.adjective = 'different';
		await component.$tick();
		assert.equal(window.document.title, 'a different title');
	}
};
