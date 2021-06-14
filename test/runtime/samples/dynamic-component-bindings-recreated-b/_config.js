export default {
	props: {
		x: true
	},

	html: `
		<p>parent green</p>
		<p>green green</p>
	`,

	async test({ assert, component, target }) {
		component.foo = undefined;
		component.x = false;
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<p>parent red</p>
			<p>red red</p>
		`);

		component.foo = undefined;
		component.x = true;
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<p>parent green</p>
			<p>green green</p>
		`);
	}
};
