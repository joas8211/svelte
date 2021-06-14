export default {
	props: {
		myClass: 'one two'
	},

	html: '<div class="one two three"></div>',

	async test({ assert, component, target, window }) {
		component.myClass = 'one';
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<div class="one three"></div>
		`);
	}
};
