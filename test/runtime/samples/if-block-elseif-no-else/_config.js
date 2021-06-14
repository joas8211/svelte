export default {
	props: {
		x: 11
	},

	html: `
		<p>x is greater than 10</p>
	`,

	async test({ assert, component, target }) {
		component.x = 4;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<p>x is less than 5</p>
		`);

		component.x = 6;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, '');
	}
};
