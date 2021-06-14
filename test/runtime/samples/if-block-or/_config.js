export default {
	props: {
		a: true,
		b: false
	},

	html: '<p>i am visible</p>',

	async test({ assert, component, target }) {
		component.a = false;
		await component.$tick();
		assert.htmlEqual( target.innerHTML, '' );
		component.b = true;
		await component.$tick();
		assert.htmlEqual( target.innerHTML, '<p>i am visible</p>' );
	}
};
