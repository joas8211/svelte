export default {
	props: {
		foo: true,
		bar: true
	},

	html: '<div class="foo bar"></div>',

	async test({ assert, component, target, window }) {
		component.foo = false;
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<div class="bar"></div>
		`);
	}
};
