export default {
	props: {
		condition: false
	},

	async test({ assert, component, target, window }) {
		assert.equal(window.document.title, '');
		assert.equal(Boolean(window.document.getElementById('meta')), true);

		component.condition = true;
		await component.$tick();
		assert.equal(window.document.title, 'woo!!!');
		assert.equal(window.document.getElementById('meta'), null);
	}
};
