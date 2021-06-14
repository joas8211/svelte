export default {
	props: {
		animals: [ 'alpaca', 'baboon', 'capybara' ]
	},

	html: `
		<p>alpaca</p>
		<p>baboon</p>
		<p>capybara</p>
	`,

	async test({ assert, component, target }) {
		component.animals = [];
		await component.$tick();
		assert.htmlEqual( target.innerHTML, `
			<p>no animals</p>
		` );

		// trigger an 'update' of the else block, to ensure that
		// non-existent update method is not called
		component.animals = [];
		await component.$tick();

		component.animals = ['wombat'];
		await component.$tick();
		assert.htmlEqual( target.innerHTML, `
			<p>wombat</p>
		` );

		component.animals = ['dinosaur'];
		await component.$tick();
		assert.htmlEqual( target.innerHTML, `
			<p>dinosaur</p>
		` );
	}
};
