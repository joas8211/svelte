export default {
	html: `
		<button>+1</button>
		<span>0 (undefined)</span>
	`,

	async test({ assert, component, target, window }) {
		const button = target.querySelector('button');
		const click = new window.MouseEvent('click');

		await button.dispatchEvent(click);
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<button>+1</button>
			<span>1 (undefined)</span>
		`);
	}
};
