export default {
	html: `
		<div>
			<input />
			<div class="foo"></div>
		</div>
	`,

	async test({ assert, component, target }) {
		component.value = 'foo';
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<div>
				<input />
				<div class="foo"></div>
			</div>
		`);
	}
};
