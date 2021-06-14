export default {
	props: {
		dummy: false,
		fruits: ['Apple', 'Banana', 'Tomato']
	},

	html: '<div><div>Apple</div><div>Banana</div><div>Tomato</div></div>',

	async test({ assert, component, target }) {
		component.dummy = true;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, '<div><div>Apple</div><div>Banana</div><div>Tomato</div></div>' );
	}
};
