export default {
	props: {
		tree: [
			{id: 1, sub: null},
			{id: 2, sub: [{id: 11}]}
		]
	},

	html: `
		<div>1</div>
		<div>2\n<div>11</div></div>
	`,

	async test({ assert, component, target }) {
		component.tree = [
			{id: 1, sub: null},
			{id: 2, sub: null}
		];
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<div>1</div>
			<div>2</div>
		`);
	}
};
