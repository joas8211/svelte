export default {
	async test({ assert, component, target, window }) {
		const btn = target.querySelector('button');
		const clickEvent = new window.MouseEvent('click');

		assert.equal(window.document.head.innerHTML.includes('<style>body { color: blue; }</style><style>body { color: green; }</style>'), true);

		await btn.dispatchEvent(clickEvent);
		await component.$tick();
		assert.equal(window.document.head.innerHTML.includes('<style>body { color: red; }</style><style>body { color: green; }</style>'), true);

		await btn.dispatchEvent(clickEvent);
		await component.$tick();
		assert.equal(window.document.head.innerHTML.includes('<style>body { color: blue; }</style><style>body { color: green; }</style>'), true);
	}
};
