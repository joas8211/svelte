export default {
	props: {
		flag: true
	},

	html: `
		<span>Before</span>
		<span>Component</span>
		<span>After</span>
	`,

	async test({ assert, component, target }) {
		component.flag = false;
		await component.$tick();
		assert.htmlEqual( target.innerHTML, `
			<span>Before</span>
			<span>Component</span>
			<span>After</span>
		`);
	}
};
