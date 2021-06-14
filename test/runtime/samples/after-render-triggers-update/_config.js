export default {
	skip_if_ssr: true,

	props: {
		value: 'hello!'
	},

	html: `
		<p>hello!</p>
		<p>hello!</p>
	`,

	async test({ assert, component, target }) {
		component.value = 'goodbye!';
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<p>goodbye!</p>
			<p>goodbye!</p>
		`);
	}
};
