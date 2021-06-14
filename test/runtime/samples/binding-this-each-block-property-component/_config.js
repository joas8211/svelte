export default {
	html: '',

	async test({ assert, component, target }) {
		component.visible = true;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<p>a</p>
		`);

		assert.ok(component.items[0].ref.isFoo());
	}
};
