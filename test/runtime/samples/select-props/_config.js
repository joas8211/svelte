export default {
	async test({ assert, component, target, window }) {
		const selects = document.querySelectorAll('select');

		const event1 = new window.Event('change');
		selects[0].value = 'b';
		selects[0].dispatchEvent(event1);

		const event2 = new window.Event('change');
		selects[1].value = 'b';
		selects[1].dispatchEvent(event2);

		await component.$tick();
		assert.deepEqual(component.log, [1, 2]);
	}
};
