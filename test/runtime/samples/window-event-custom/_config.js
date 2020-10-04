function wait() {
	return new Promise(resolve => setTimeout(resolve, 0));
}

export default {
	html: `<p>escaped: false</p>`,

	async test({ assert, component, target, window }) {
		const event = new window.KeyboardEvent('keydown', {
			key: 'Escape'
		});

		await window.dispatchEvent(event);
		await wait();
		assert.htmlEqual(target.innerHTML, `
			<p>escaped: true</p>
		`);
	}
};
