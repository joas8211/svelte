export default {
	props: {
		options: [ { id: 'a' }, { id: 'b' }, { id: 'c' } ],
		selected: 'b'
	},

	async test({ assert, component, target, window }) {
		const select = target.querySelector('select');
		assert.equal(select.value, 'b');

		const event = new window.Event('change');

		select.value = 'c';
		select.dispatchEvent(event);
		await component.$tick();

		assert.equal(select.value, 'c');
		assert.equal(component.lastChangedTo, 'c');
		assert.equal(component.selected, 'c');
	}
};
