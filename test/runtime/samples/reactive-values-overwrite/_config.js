export default {
	html: `
		<p>doubled: 2</p>
	`,

	async test({ assert, component, target }) {
		component.a = 2;
		await component.$tick();

		assert.equal(component.doubled, 4);
		assert.htmlEqual(target.innerHTML, `
			<p>doubled: 4</p>
		`);

		component.doubled = 3;
		await component.$tick();

		assert.equal(component.doubled, 3);
		assert.htmlEqual(target.innerHTML, `
			<p>doubled: 3</p>
		`);
	}
};
