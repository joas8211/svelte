export default {
	props: {
		animals: [],
		foo: 'something else'
	},

	html: `
		before
		<p>no animals, but rather something else</p>
		after
	`,

	async test({ assert, component, target }) {
		component.animals = ['wombat'];
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			before
			<p>wombat</p>
			after
		`);
	}
};
