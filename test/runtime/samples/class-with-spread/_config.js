export default {
	props: {
		myClass: 'one two',
		attributes: {
			role: 'button'
		}
	},

	html: '<div class="one two" role="button"></div>',

	async test({ assert, component, target, window }) {
		component.myClass = 'one';
		component.attributes = {
			'aria-label': 'Test'
		};
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<div class="one" aria-label="Test"></div>
		`);
	}
};
