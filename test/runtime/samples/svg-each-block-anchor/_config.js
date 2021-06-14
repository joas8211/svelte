export default {
	props: {
		foo: ['a'],
		bar: ['c']
	},

	html: `
		<svg>
			<g class='foo'>a</g>
			<g class='bar'>c</g>
		</svg>
	`,

	async test({ assert, component, target }) {
		component.foo = ['a', 'b'];
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<svg>
				<g class='foo'>a</g>
				<g class='foo'>b</g>
				<g class='bar'>c</g>
			</svg>
		`);
	}
};
