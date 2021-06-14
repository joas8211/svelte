export default {
	html: `
		<p>1 + 2 = 3</p>
		<p>Times calculated: 1</p>
	`,

	async test({ assert, component, target }) {
		component.a = 3;
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<p>3 + 2 = 5</p>
			<p>Times calculated: 2</p>
		`);
	}
};
