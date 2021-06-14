export default {
	html: '<span>waiting</span>',

	async test({ assert, component, target }) {
		component.x = 'ready';
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<span>ready</span>
		`);
	}
};
