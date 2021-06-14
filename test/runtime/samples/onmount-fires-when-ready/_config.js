export default {
	skip_if_ssr: true, // uses oncreate

	html: '<div><p>true</p></div>',

	async test({ assert, component, target }) {
		component.foo = true;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, '<div><p>true</p>\n<p>true</p></div>');
	}
};
