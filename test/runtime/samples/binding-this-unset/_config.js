export default {
	props: {
		x: true
	},

	html: '<canvas data-x="true"></canvas>',

	async test({ assert, component, target }) {
		let canvas = target.querySelector('canvas');
		assert.equal(canvas, component.foo);
		assert.equal(canvas.getAttribute('data-x'), 'true');

		component.x = false;
		await component.$tick();
		canvas = target.querySelector('canvas');
		assert.equal(canvas, component.foo);
		assert.equal(canvas.getAttribute('data-x'), 'false');

		component.x = true;
		await component.$tick();
		canvas = target.querySelector('canvas');
		assert.equal(canvas, component.foo);
		assert.equal(canvas.getAttribute('data-x'), 'true');
	}
};
