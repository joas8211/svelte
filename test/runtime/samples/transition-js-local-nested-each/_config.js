export default {
	props: {
		x: false,
		things: ['a']
	},

	async test({ assert, component, target, raf }) {
		component.x = true;
		await component.$tick();

		const div1 = target.querySelector('div');
		assert.equal(div1.foo, undefined);

		raf.tick(100);
		assert.equal(div1.foo, undefined);

		component.things = ['a', 'b'];
		await component.$tick();
		assert.htmlEqual(target.innerHTML, '<div></div><div></div>');

		const div2 = target.querySelector('div:last-child');
		assert.equal(div1.foo, undefined);
		assert.equal(div2.foo, 0);

		raf.tick(200);
		assert.equal(div1.foo, undefined);
		assert.equal(div2.foo, 1);

		component.x = false;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, '');
	}
};
