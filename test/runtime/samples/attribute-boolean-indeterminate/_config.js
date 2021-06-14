export default {
	// This is a bit of a funny one — there's no equivalent attribute,
	// so it can't be server-rendered
	skip_if_ssr: true,

	props: {
		indeterminate: true
	},

	html: `
		<input type='checkbox'>
	`,

	async test({ assert, component, target }) {
		const input = target.querySelector('input');

		assert.ok(input.indeterminate);
		component.indeterminate = false;
		await component.$tick();
		assert.ok(!input.indeterminate);
	}
};
