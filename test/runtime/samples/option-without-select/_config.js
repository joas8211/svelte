export default {
	props: {
		foo: 'hello'
	},

	html: "<option value='hello'>hello</option>",

	async test({ assert, component, target }) {
		component.foo = 'goodbye';
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<option value='goodbye'>goodbye</option>
		`);
	}
};
