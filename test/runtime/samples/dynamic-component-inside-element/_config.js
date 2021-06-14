export default {
	props: {
		x: true
	},

	html: `
		<div><p>true, therefore Foo</p></div>
	`,

	async test({ assert, component, target }) {
		component.x = false;
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<div><p>false, therefore Bar</p></div>
		`);
	}
};
