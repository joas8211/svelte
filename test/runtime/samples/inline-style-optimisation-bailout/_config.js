export default {
	html: `
		<p style="opacity: 0.5; color: red">color: red</p>
	`,

	async test({ assert, component, target, window }) {
		const p = target.querySelector('p');

		let styles = window.getComputedStyle(p);
		assert.equal(styles.opacity, '0.5');
		assert.equal(styles.color, 'red');

		component.styles = 'font-size: 20px';
		await component.$tick();

		styles = window.getComputedStyle(p);
		assert.equal(styles.opacity, '0.5');
		assert.equal(styles.color, '');
		assert.equal(styles.fontSize, '20px');
	}
};
