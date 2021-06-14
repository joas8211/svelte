export default {
	skip_if_ssr: true,

	props: {
		raw: '<p>does not change</p>'
	},

	html: '<div><p>does not change</p></div>',

	async test({ assert, component, target }) {
		const p = target.querySelector('p');

		component.raw = '<p>does not change</p>';
		await component.$tick();
		assert.equal(target.innerHTML, '<div><p>does not change</p></div>');
		assert.strictEqual(target.querySelector('p'), p);
	}
};
