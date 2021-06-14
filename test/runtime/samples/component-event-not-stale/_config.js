export default {
	props: {
		value: 1
	},

	async test({ assert, component, target, window }) {
		const buttons = target.querySelectorAll('button');
		const click = new window.MouseEvent('click');

		const events = [];
		component.$on('value', event => {
			events.push(event.detail);
		});

		buttons[0].dispatchEvent(click);
		buttons[1].dispatchEvent(click);
		await component.$tick();

		component.value = 2;

		buttons[0].dispatchEvent(click);
		buttons[1].dispatchEvent(click);
		await component.$tick();

		assert.deepEqual(events, [
			{ value: 1 },
			{ value: 1 },
			{ value: 2 },
			{ value: 2 }
		]);
	}
};
