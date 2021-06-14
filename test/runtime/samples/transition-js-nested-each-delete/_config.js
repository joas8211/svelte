export default {
	props: {
		visible: true,
		things: ['a', 'b', 'c']
	},

	async test({ assert, component, target, raf }) {
		assert.htmlEqual(target.innerHTML, `
			<div>a</div>
			<div>b</div>
			<div>c</div>
		`);

		component.things = ['a'];
		await component.$tick();

		raf.tick(100);
		assert.htmlEqual(target.innerHTML, `
			<div>a</div>
		`);

		component.visible = false;
		await component.$tick();

		raf.tick(200);
		assert.htmlEqual(target.innerHTML, '');
	}
};
