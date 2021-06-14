export default {
	props: {
		prop: 'a'
	},

	html: 'a',

	async test({ assert, component, target }) {
		component.prop = 'b';
		await component.$tick();
		assert.htmlEqual( target.innerHTML, 'b' );
	}
};
