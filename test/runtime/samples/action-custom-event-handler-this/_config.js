export default {
	html: '<input>',

	async test({ assert, component, target, window }) {
		const input = target.querySelector('input');
		const event = new window.KeyboardEvent('keydown', {
			key: 'Enter'
		});

		let blurred = false;

		input.focus();

		input.addEventListener('blur', () => {
			blurred = true;
		});

		input.dispatchEvent(event);
		await component.$tick();

		assert.ok(blurred);
	}
};
