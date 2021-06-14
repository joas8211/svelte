export default {
	intro: true,

	async test({ assert, component, target, raf }) {
		assert.equal(target.querySelector('div'), component.no);
		assert.equal(component.no.foo, 0);

		raf.tick(200);
		assert.equal(component.no.foo, 0.5);

		raf.tick(500);
		component.x = true;
		await component.$tick();
		assert.equal(component.no, undefined);
		assert.equal(component.yes.foo, 0);

		raf.tick(700);
		assert.equal(component.yes.foo, 0.5);

		raf.tick(1000);
	}
};
