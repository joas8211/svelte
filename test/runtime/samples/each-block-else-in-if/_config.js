export default {
	html: `
		<p>nothing</p>
		<p>after</p>
	`,

	async test({ assert, component, target }) {
		component.visible = false;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, '');

		component.visible = true;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<p>nothing</p>
			<p>after</p>
		`);
	}
};
