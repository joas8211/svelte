export default {
	html: '<p>escaped: false</p>',

	async test({ assert, component, target, window }) {
		const event = new window.KeyboardEvent('keydown', {
			key: 'Escape'
		});

		await window.dispatchEvent(event);
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<p>escaped: true</p>
		`);
	}
};
