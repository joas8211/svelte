let count = 0;
let value = 'foo';

export default {
	props: {
		value() {
			count++;
			return value;
		}
	},

	html: `
		<div>foo</div>
		<div>foo</div>
	`,

	async test({ assert, component, target }) {
		value = 'bar';
		component.id = 1;
		await component.$tick();

		assert.equal(count, 4);
		assert.htmlEqual(target.innerHTML, `
			<div>bar</div>
			<div>bar</div>
		`);
	}
};
