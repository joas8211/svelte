export default {
	async test({ assert, component, target, window }) {
		const input = target.querySelector('input');
		component.value = undefined;
		await component.$tick();

		assert.equal(input.value, 'undefined');

		component.value = 'foobar';
		await component.$tick();

		assert.equal(input.value, 'foobar');
	}
};
