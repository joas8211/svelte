export default {
	props: {
		testName1: 'test1',
		testName2: 'test2'
	},

	html: '<div class="test1test2 svelte-x1o6ra"></div>',

	async test({ assert, component, target }) {
		const div = target.querySelector('div');
		assert.equal(div.className, 'test1test2 svelte-x1o6ra');

		component.testName1 = null;
		component.testName2 = null;
		await component.$tick();
		assert.equal(div.className, '0 svelte-x1o6ra');

		component.testName1 = null;
		component.testName2 = 'test';
		await component.$tick();
		assert.equal(div.className, 'nulltest svelte-x1o6ra');

		component.testName1 = undefined;
		component.testName2 = 'test';
		await component.$tick();
		assert.equal(div.className, 'undefinedtest svelte-x1o6ra');

		component.testName1 = undefined;
		component.testName2 = undefined;
		await component.$tick();
		assert.equal(div.className, 'NaN svelte-x1o6ra');

		component.testName1 = null;
		component.testName2 = 1;
		await component.$tick();
		assert.equal(div.className, '1 svelte-x1o6ra');

		component.testName1 = undefined;
		component.testName2 = 1;
		await component.$tick();
		assert.equal(div.className, 'NaN svelte-x1o6ra');

		component.testName1 = null;
		component.testName2 = 0;
		await component.$tick();
		assert.equal(div.className, '0 svelte-x1o6ra');

		component.testName1 = undefined;
		component.testName2 = 0;
		await component.$tick();
		assert.equal(div.className, 'NaN svelte-x1o6ra');
	}
};
