export default {
	html: "<div class='foo bar'>hello</div>",
	async test({ assert, component, target }) {
		component.blah = 'goodbye';
		await component.$tick();
		assert.htmlEqual(target.innerHTML, "<div class='foo bar'>goodbye</div>");
	}
};
