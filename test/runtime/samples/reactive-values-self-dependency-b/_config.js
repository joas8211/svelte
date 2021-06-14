export default {
	html: `
		<p>count: 0</p>
	`,

	async test({ assert, component, target }) {
		component.count = 5;
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<p>count: 5</p>
		`);

		component.count = 50;
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<p>count: 9</p>
		`);
	}
};
