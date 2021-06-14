export default {
	html: `
		<p>disabled</p>
		<p>unconditional</p>`,

	async test({ assert, component, target }) {
		component.enabled = true;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<p>enabled</p>
			<p>unconditional</p>
		`);
	}
};
