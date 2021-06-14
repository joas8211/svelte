export default {
	props: {
		animals: ['alpaca', 'baboon', 'capybara'],
		foo: 'something else'
	},

	html: `
		before
		<p>alpaca</p>
		<p>baboon</p>
		<p>capybara</p>
		after
	`,

	async test({ assert, component, target }) {
		component.animals = [];
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			before
			<p>no animals, but rather something else</p>
			after
		`);

		component.foo = 'something other';
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			before
			<p>no animals, but rather something other</p>
			after
		`);

		component.animals = ['wombat'];
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			before
			<p>wombat</p>
			after
		`);
	}
};
