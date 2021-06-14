let fulfil;

const promise = new Promise(f => {
	fulfil = f;
});

export default {
	props: {
		x: false,
		promise
	},

	async test({ assert, component, target, raf }) {
		component.x = true;
		await component.$tick();
		fulfil();

		return promise.then(async () => {
			const div = target.querySelector('div');
			assert.equal(div.foo, 0);

			raf.tick(100);
			assert.equal(div.foo, 1);

			component.x = false;
			await component.$tick();
			assert.htmlEqual(target.innerHTML, '');

			raf.tick(150);
			assert.equal(div.foo, 1);
		});
	}
};
