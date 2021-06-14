export default {
	props: {
		visible: false,
		things: [ 'a', 'b', 'c' ]
	},

	async test({ assert, component, target, window, raf }) {
		component.visible = true;
		await component.$tick();
		const divs = target.querySelectorAll('div');
		assert.equal(divs[0].foo, 0);
		assert.equal(divs[1].foo, 0);
		assert.equal(divs[2].foo, 0);

		raf.tick(50);
		assert.equal(divs[0].foo, 0.5);
		assert.equal(divs[1].foo, 0.5);
		assert.equal(divs[2].foo, 0.5);

		component.visible = false;
		await component.$tick();

		raf.tick(70);
		assert.equal(divs[0].foo, 0.7);
		assert.equal(divs[1].foo, 0.7);
		assert.equal(divs[2].foo, 0.7);

		assert.equal(divs[0].bar, 0.8);
		assert.equal(divs[1].bar, 0.8);
		assert.equal(divs[2].bar, 0.8);

		component.visible = true;
		await component.$tick();

		raf.tick(100);
		assert.equal(divs[0].foo, 0.3);
		assert.equal(divs[1].foo, 0.3);
		assert.equal(divs[2].foo, 0.3);

		assert.equal(divs[0].bar, 1);
		assert.equal(divs[1].bar, 1);
		assert.equal(divs[2].bar, 1);
	}
};
