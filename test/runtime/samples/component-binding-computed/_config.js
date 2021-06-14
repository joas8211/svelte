export default {
	html: `
		<label>firstname <input></label>
		<label>lastname <input></label>
	`,

	async test({ assert, component, target, window }) {
		const input = new window.Event('input');
		const inputs = target.querySelectorAll('input');

		inputs[0].value = 'Ada';
		await inputs[0].dispatchEvent(input);
		await component.$tick();
		assert.deepEqual(component.values, {
			firstname: 'Ada',
			lastname: ''
		});

		inputs[1].value = 'Lovelace';
		await inputs[1].dispatchEvent(input);
		await component.$tick();
		assert.deepEqual(component.values, {
			firstname: 'Ada',
			lastname: 'Lovelace'
		});

		component.values = {
			firstname: 'Grace',
			lastname: 'Hopper'
		};
		await component.$tick();
		assert.equal(inputs[0].value, 'Grace');
		assert.equal(inputs[1].value, 'Hopper');
	}
};
