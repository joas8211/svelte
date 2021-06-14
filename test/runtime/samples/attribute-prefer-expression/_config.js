export default {
	skip_if_ssr: true,

	props: {
		foo: false
	},

	async test({ assert, component, target }) {
		const inputs = target.querySelectorAll('input');

		assert.ok(inputs[0].checked);
		assert.ok(!inputs[1].checked);

		component.foo = true;
		await component.$tick();

		assert.ok(!inputs[0].checked);
		assert.ok(inputs[1].checked);
	}
};
