export default {
	compileOptions: {
		dev: true
	},

	async test({ assert, component }) {
		try {
			component.width = 99;
			await component.$tick();
			throw new Error('Expected an error');
		} catch (err) {
			assert.equal(err.message, "<Main>: Cannot set read-only property 'width'");
		}
	}
};
