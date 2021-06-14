export default {
	html: `
		<button>Click me</button>
	`,

	async test({ assert, component, target, window }) {
		const event = new window.MouseEvent('click');
		const button = target.querySelector('button');

		await button.dispatchEvent(event);
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<button>A,B,C</button>
		`);
	}
};
