export default {
	props: {
		clicked: false
	},

	compileOptions: {
		accessors: true
	},

	snapshot(target) {
		const button = target.querySelector('button');

		return {
			button
		};
	},

	async test(assert, target, snapshot, component, window) {
		const button = target.querySelector('button');
		assert.equal(button, snapshot.button);

		await button.dispatchEvent(new window.MouseEvent('click'));
		await component.$tick();

		assert.ok(component.clicked);
		assert.htmlEqual(target.innerHTML, `
			<button>click me</button>
			<p>clicked!</p>
		`);
	}
};
