export default {
	props: {
		x: 10
	},

	html: '5',

	async test({ assert, component, target }) {
		component.x = 3;
		await component.$tick();
		assert.htmlEqual( target.innerHTML, '3' );
	}
};
