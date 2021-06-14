export default {
	html: `
		<p>10 - 90</p>
	`,

	async test({ assert, component, target }) {
		component.width = 50;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<p>10 - 40</p>
		`);
	}
};
