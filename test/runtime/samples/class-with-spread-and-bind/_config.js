export default {
	props: {
		primary: true
	},

	html: '<div class="test-class primary" role="button"></div>',

	async test({ assert, component, target, window }) {
		component.primary = true;
		await component.$tick();

		assert.htmlEqual(
			target.innerHTML,
			`
			<div class="test-class primary" role="button"></div>
		`
		);
	}
};
