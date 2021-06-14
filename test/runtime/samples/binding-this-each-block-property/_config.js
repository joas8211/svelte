export default {
	html: '',

	async test({ assert, component, target }) {
		component.visible = true;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<div>a</div>
		`);

		assert.equal(component.items[0].ref, target.querySelector('div'));
	}
};
