export default {
	props: {
		foo: true,
		bar: true,
		myClass: 'one two'
	},

	html: '<div class="one two foo bar"></div>',

	async test({ assert, component, target, window }) {
		component.foo = false;
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<div class="one two bar"></div>
		`);
	}
};
