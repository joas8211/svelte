export default {
	async test({ assert, component }) {
		let count = 0;

		component.$on('state', ({ changed }) => {
			if (changed.bar) count += 1;
		});

		component.x = true;
		await component.$tick();
		assert.equal(count, 0);
	}
};
