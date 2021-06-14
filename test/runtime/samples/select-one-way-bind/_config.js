export default {
	skip_if_ssr: true,

	props: {
		foo: 'a'
	},

	async test({ assert, component, target }) {
		const options = target.querySelectorAll( 'option' );

		assert.equal( options[0].selected, true );
		assert.equal( options[1].selected, false );

		component.foo = 'b';
		await component.$tick();

		assert.equal( options[0].selected, false );
		assert.equal( options[1].selected, true );
	}
};
