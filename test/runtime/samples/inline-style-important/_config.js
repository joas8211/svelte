export default {
	html: `
		<p class="svelte-y94hdy" style="color: red !important; font-size: 20px !important; opacity: 1;">red</p>
	`,

	async test({ assert, component, target, window }) {
		const p = target.querySelector('p');

		let styles = window.getComputedStyle(p);
		assert.equal(styles.color, 'red');
		assert.equal(styles.fontSize, '20px');

		component.color = 'green';
		await component.$tick();

		styles = window.getComputedStyle(p);
		assert.equal(styles.color, 'green');
	}
};
