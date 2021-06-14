export default {
	props: {
		count: 42
	},

	html: `
		<input type=range>
		<p>number 42</p>
	`,

	ssrHtml: `
		<input type=range value=42>
		<p>number 42</p>
	`,

	async test({ assert, component, target, window }) {
		const input = target.querySelector('input');
		assert.equal(input.value, '42');

		const event = new window.Event('input');

		input.value = '43';
		await input.dispatchEvent(event);
		await component.$tick();
		assert.equal(component.count, 43);
		assert.htmlEqual(target.innerHTML, `
			<input type='range'>
			<p>number 43</p>
		`);

		component.count = 44;
		await component.$tick();
		assert.equal(input.value, '44');
		assert.htmlEqual(target.innerHTML, `
			<input type='range'>
			<p>number 44</p>
		`);
	}
};
