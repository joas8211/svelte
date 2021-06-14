export default {
	async test({ assert, component, window }) {
		assert.deepEqual(component.events, []);

		const event1 = new window.Event('mouseenter');
		window.document.body.dispatchEvent(event1);
		await component.$tick();
		assert.deepEqual(component.events, ['enter']);

		const event2 = new window.Event('mouseleave');
		window.document.body.dispatchEvent(event2);
		await component.$tick();
		assert.deepEqual(component.events, ['enter', 'leave']);
	}
};
