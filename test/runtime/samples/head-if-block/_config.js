export default {
	props: {
		condition: false
	},

	async test({ assert, component, window }) {
		assert.equal(window.document.title, '');

		component.condition = true;
		await component.$tick();
		assert.equal(window.document.title, 'woo!!!');
	}
};
