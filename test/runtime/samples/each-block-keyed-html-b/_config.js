export default {
	html: `
		<div><span>hello</span> John</div>
		<div><span>hello</span> Jill</div>
	`,

	async test({ assert, component, target }) {
		component.names = component.names.reverse();
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<div><span>hello</span> Jill</div>
			<div><span>hello</span> John</div>
		`);
	}
};
