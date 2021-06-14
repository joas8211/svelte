export default {
	props: {
		visible: true
	},

	html: '<p>i am visible</p>',

	async test({ assert, component, target }) {
		component.visible = false;
		await component.$tick();
		assert.htmlEqual( target.innerHTML, '' );
		component.visible = true;
		await component.$tick();
		assert.htmlEqual( target.innerHTML, '<p>i am visible</p>' );
	}
};
