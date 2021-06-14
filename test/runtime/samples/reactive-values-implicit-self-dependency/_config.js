export default {
	html: `
		<p>1 / 1</p>
	`,

	async test({ assert, component, target }) {
		component.num = 3;
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<p>3 / 3</p>
		`);

		component.num = 2;
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<p>2 / 3</p>
		`);
	}
};
