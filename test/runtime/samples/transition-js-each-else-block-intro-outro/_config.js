export default {
	props: {
		things: ['a', 'b', 'c']
	},

	async test({ assert, component, target, window, raf }) {
		component.things = [];
		await component.$tick();
		let div = target.querySelector('div');
		assert.equal(div.foo, 0);

		raf.tick(200);
		assert.equal(div.foo, 0.5);

		raf.tick(300);
		assert.equal(div.foo, 0.75);

		raf.tick(400);
		assert.equal(div.foo, 1);

		raf.tick(600);
		component.things = ['a', 'b', 'c'];
		await component.$tick();

		raf.tick(700);
		assert.equal(div.foo, 1);
		assert.equal(div.bar, 0.75);

		raf.tick(800);
		assert.equal(div.foo, 1);
		assert.equal(div.bar, 0.5);

		raf.tick(900);
		assert.equal(div.foo, 1);
		assert.equal(div.bar, 0.25);

		// test outro before intro complete
		raf.tick(1000);
		component.things = [];
		await component.$tick();
		div = target.querySelector('div');

		raf.tick(1200);
		assert.equal(div.foo, 0.5);

		component.things = ['a', 'b', 'c'];
		await component.$tick();
		raf.tick(1300);
		assert.equal(div.foo, 0.75);
		assert.equal(div.bar, 0.75);

		raf.tick(1400);
		assert.equal(div.foo, 1);
		assert.equal(div.bar, 0.5);

		raf.tick(2000);
	}
};
