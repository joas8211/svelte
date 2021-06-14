export default {
	props: {
		x: true
	},

	html: `
		<p>foo</p>
		<input>
	`,

	async test({ assert, component, target, window }) {
		let input = target.querySelector('input');
		input.value = 'abc';
		await input.dispatchEvent(new window.Event('input'));
		await component.$tick();
		assert.equal(component.y, 'abc');

		component.x = false;
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<p>bar</p>
			<input type='checkbox'>
		`);

		input = target.querySelector('input');
		input.checked = true;
		await input.dispatchEvent(new window.Event('change'));
		await component.$tick();
		assert.equal(component.z, true);
	}
};
