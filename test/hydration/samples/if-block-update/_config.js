export default {
	props: {
		foo: true,
		bar: false
	},

	compileOptions: {
		accessors: true
	},

	snapshot(target) {
		const p = target.querySelector('p');

		return {
			p
		};
	},

	async test(assert, target, snapshot, component) {
		const p = target.querySelector('p');

		assert.equal(p, snapshot.p);

		component.foo = false;
		component.bar = true;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, '<p>bar!</p>');
	}
};
