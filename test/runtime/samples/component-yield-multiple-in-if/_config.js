export default {
	html: `
		<div><p class='widget'>Hello</p></div>
	`,

	async test({ assert, component, target }) {
		component.arriving = false;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, "<div><p class='widget'>Goodbye</p></div>");
	}
};
