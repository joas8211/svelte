export default {
	props: {
		x: 11
	},

	html: `
		before-if-after
	`,

	async test({ assert, component, target }) {
		component.x = 4;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			before-elseif-after
		`);

		component.x = 6;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			before-else-after
		`);
	}
};
