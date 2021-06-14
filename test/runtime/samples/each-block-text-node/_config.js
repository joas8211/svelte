export default {
	props: {
		animals: [ 'alpaca', 'baboon', 'capybara' ]
	},

	html: '(alpaca)(baboon)(capybara)',

	async test({ assert, component, target }) {
		component.animals = [ 'caribou', 'dogfish' ];
		await component.$tick();
		assert.htmlEqual( target.innerHTML, '(caribou)(dogfish)' );
		component.animals = [];
		await component.$tick();
		assert.htmlEqual( target.innerHTML, '' );
	}
};
