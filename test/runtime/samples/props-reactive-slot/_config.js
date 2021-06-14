export default {
	html: `
		<h1>hi</h1>
		<button>Change</button>
	`,

	async test({ assert, component, target, window }) {
		const btn = target.querySelector('button');
		const clickEvent = new window.MouseEvent('click');

		await btn.dispatchEvent(clickEvent);
		await component.$tick();
		assert.htmlEqual(
			target.innerHTML,
			`
			<h1>changed</h1>
			<button>Change</button>
		`
		);
	}
};
