export default {
	html: '<p>2</p>',

	async test({ assert, component, target }) {
		component.y = 2;
		await component.$tick();
		assert.equal(component.x, 4);
		assert.equal(target.innerHTML, '<p>4</p>');
	}
};
