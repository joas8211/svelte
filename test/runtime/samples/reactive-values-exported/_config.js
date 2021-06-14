export default {
	props: {
		x: 1
	},

	html: `
		<p>1 1 1</p>
	`,

	async test({ assert, component, target }) {
		assert.equal(component.y, 1);
		assert.equal(component.z, 1);

		component.x = 2;
		await component.$tick();
		assert.equal(component.y, 2);
		assert.equal(component.z, 2);
	}
};
