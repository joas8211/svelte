export default {
	html: "<div class='b' title='baz'></div>",
	async test({ assert, component, target }) {
		component.foo = true;
		await component.$tick();
		assert.htmlEqual(
			target.innerHTML,
			"<div class='a' title='baz'></div>"
		);
	}
};
