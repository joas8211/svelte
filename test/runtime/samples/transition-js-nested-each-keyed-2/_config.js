export default {
	props: {
		x: true,
		things: ['a', 'b']
	},

	async test({ assert, component, target, window, raf }) {
		component.x = false;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, '');
	}
};
