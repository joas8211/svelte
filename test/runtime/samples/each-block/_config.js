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
		component.animals = [ 'alpaca', 'baboon', 'caribou', 'dogfish' ];
		await component.$tick();
		assert.htmlEqual( target.innerHTML, `
			<p>alpaca</p>
			<p>baboon</p>
			<p>caribou</p>
			<p>dogfish</p>
		` );

		component.animals = [];
		await component.$tick();
		assert.htmlEqual( target.innerHTML, '' );
	}
};
