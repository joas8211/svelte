export default {
	props: {
		x: false,
		y: true
	},

	async test({ assert, component, target, window, raf }) {
		component.x = true;
		await component.$tick();

		let div = target.querySelector('div');
		assert.equal(div.foo, undefined);

		component.y = false;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, '<div></div>');
		div = target.querySelector('div');

		raf.tick(50);
		assert.equal(div.foo, 0.5);

		raf.tick(100);
		assert.htmlEqual(target.innerHTML, '');

		component.x = false;
		component.y = true;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, '');

		component.x = true;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, '<div></div>');
		div = target.querySelector('div');

		component.y = false;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, '<div></div>');

		raf.tick(120);
		assert.equal(div.foo, 0.8);

		raf.tick(200);
		assert.htmlEqual(target.innerHTML, '');
	}
};
