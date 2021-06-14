export default {
	html: `
		<div>
			<p>unconditional</p>
		</div>`,

	async test({ assert, component, target }) {
		component.foo = true;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<div>
				<p>conditional</p>
				<p>unconditional</p>
			</div>
		`);
	}
};
