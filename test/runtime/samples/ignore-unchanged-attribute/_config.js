import counter from './counter.js';

export default {
	props: {
		x: 1,
		y: 2
	},

	html: `
		<p>1</p>
		<p class='2'></p>
	`,

	async test({ assert, component }) {
		counter.count = 0;

		component.x = 3;
		await component.$tick();
		assert.equal(counter.count, 0);

		component.x = 4;
		component.y = 5;
		await component.$tick();
		assert.equal(counter.count, 1);

		component.x = 5;
		component.y = 5;
		await component.$tick();
		assert.equal(counter.count, 1);
	}
};
