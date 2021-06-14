export default {
	html: `
		<div>
			<button>click me</button>
		</div>
	`,

	async test({ assert, component, target, window }) {
		const button = target.querySelector('button');
		const event = new window.MouseEvent('click', {
			bubbles: true
		});

		await button.dispatchEvent(event);
		await component.$tick();
		assert.ok(component.inner_clicked);
		assert.ok(!component.outer_clicked);
	}
};
