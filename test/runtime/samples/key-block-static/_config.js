export default {
	html: '<div>00</div>',
	async test({ assert, component, target, window }) {
		const div = target.querySelector('div');
		component.anotherValue = 2;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, '<div>02</div>');
		assert.strictEqual(div, target.querySelector('div'));
	}
};
