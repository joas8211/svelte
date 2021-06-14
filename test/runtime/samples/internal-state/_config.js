export default {
	html: `
		<p>internal: 1</p>
		<button>click me</button>
	`,

	async test({ assert, component, target, window }) {
		const button = target.querySelector('button');
		const click = new window.MouseEvent('click');

		await button.dispatchEvent(click);
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<p>internal: 1</p>
			<button>click me</button>
		`);
	}
};
