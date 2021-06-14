const foo = '<script type="application/json">{ "foo": "true" }</script>';
const bar = '<script type="application/json">{ "bar": "true" }</script>';

export default {
	props: {
		condition: false,
		foo,
		bar
	},

	async test({ assert, component, window }) {
		assert.equal(window.document.head.innerHTML.includes(foo), false);
		assert.equal(window.document.head.innerHTML.includes(bar), true);

		component.condition = true;
		await component.$tick();
		assert.equal(window.document.head.innerHTML.includes(foo), true);
		assert.equal(window.document.head.innerHTML.includes(bar), false);
	}
};
