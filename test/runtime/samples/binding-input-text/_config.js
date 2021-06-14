export default {
	props: {
		name: 'world'
	},

	html: `
		<input>
		<p>hello world</p>
	`,

	ssrHtml: `
		<input value="world">
		<p>hello world</p>
	`,

	async test({ assert, component, target, window }) {
		const input = target.querySelector('input');
		assert.equal(input.value, 'world');

		const event = new window.Event('input');

		input.value = 'everybody';
		await input.dispatchEvent(event);
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<input>
			<p>hello everybody</p>
		`);

		component.name = 'goodbye';
		await component.$tick();
		assert.equal(input.value, 'goodbye');
		assert.htmlEqual(target.innerHTML, `
			<input>
			<p>hello goodbye</p>
		`);
	}
};
