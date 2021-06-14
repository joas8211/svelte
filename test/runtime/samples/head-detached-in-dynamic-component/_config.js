export default {
	html: `
		A
	`,

	async test({ assert, component, window }) {
		component.x = false;
		await component.$tick();

		const meta = window.document.querySelectorAll('meta');

		assert.equal(meta.length, 1);
		assert.equal(meta[0].name, 'description');
		assert.equal(meta[0].content, 'B');
	}
};
