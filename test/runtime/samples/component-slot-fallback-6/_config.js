// $$props reactivity in slot fallback
export default {
	html: `
		<input>
		{"value":""}
	`,

	async test({ assert, component, target, window }) {
		const input = target.querySelector('input');
		input.value = 'abc';
		await input.dispatchEvent(new window.Event('input'));
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<input>
			{"value":"abc"}
		`);
	}
};
