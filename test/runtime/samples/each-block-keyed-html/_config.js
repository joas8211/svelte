export default {
	html: `
		JohnJill
	`,

	async test({ assert, component, target }) {
		component.names = component.names.reverse();
		await component.$tick();
		assert.htmlEqual(target.innerHTML, 'JillJohn');
	}
};
