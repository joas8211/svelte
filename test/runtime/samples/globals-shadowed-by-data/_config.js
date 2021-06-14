export default {
	props: {
		x: 10
	},

	html: 'potato',

	async test({ assert, component, target }) {
		component.x = 3;
		await component.$tick();
		assert.htmlEqual( target.innerHTML, 'potato' );
	}
};
