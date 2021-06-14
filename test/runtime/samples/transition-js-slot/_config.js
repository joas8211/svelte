export default {
	props: {
		visible: false
	},

	html: `
		<div></div>
	`,

	async test({ assert, component, target, window, raf }) {
		component.visible = true;
		await component.$tick();

		const p = target.querySelector('p');
		assert.equal(p.foo, 0);

		raf.tick(50);
		assert.equal(p.foo, 0.5);

		component.visible = false;
		await component.$tick();

		raf.tick(75);
		assert.equal(p.foo, 0.25);

		raf.tick(100);
		assert.equal(p.foo, 0);
	}
};
