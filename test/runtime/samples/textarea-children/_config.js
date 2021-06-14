export default {
	skip_if_ssr: true, // SSR behaviour is awkwardly different

	props: {
		foo: 42
	},

	html: '<textarea></textarea>',

	async test({ assert, component, target }) {
		const textarea = target.querySelector( 'textarea' );
		assert.strictEqual( textarea.value, '\n\t<p>not actually an element. 42</p>\n' );

		component.foo = 43;
		await component.$tick();
		assert.strictEqual( textarea.value, '\n\t<p>not actually an element. 43</p>\n' );
	}
};
