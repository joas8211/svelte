export default {
	props: {
		items: [
			'whatever'
		],
		foo: 'wrong',
		bar: 'right'
	},

	async test({ assert, component, target, window }) {
		const button = target.querySelector('button');
		const event = new window.MouseEvent('click');

		button.dispatchEvent(event);
		assert.equal(component.foo, 'right');

		component.bar = 'left';
		await component.$tick();
		button.dispatchEvent(event);
		assert.equal(component.foo, 'left');
	}
};
