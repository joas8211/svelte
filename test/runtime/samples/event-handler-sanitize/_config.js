export default {
	html: `
		<div>toggle</div>
	`,

	async test({ assert, component, target, window }) {
		const div = target.querySelector('div');
		const event = new window.MouseEvent('some-event');

		await div.dispatchEvent(event);
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<div>toggle</div>
			<p>hello!</p>
		`);

		await div.dispatchEvent(event);
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<div>toggle</div>
		`);
	}
};
