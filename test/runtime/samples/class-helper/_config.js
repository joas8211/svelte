export default {
	props: {
		user: { active: true }
	},

	html: '<div class="active"></div>',

	async test({ assert, component, target }) {
		component.user = { active: false };
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<div class></div>
		`);
	}
};
