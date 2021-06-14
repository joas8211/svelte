export default {
	props: {
		testName1: 'test1',
		testName2: 'test2'
	},

	html: '<div class="test1test2"></div>',

	async test({ assert, component, target }) {
		const div = target.querySelector('div');
		assert.equal(div.className, 'test1test2');

		component.testName1 = null;
		component.testName2 = null;
		await component.$tick();
		assert.equal(div.className, '0');

		component.testName1 = null;
		component.testName2 = 'test';
		await component.$tick();
		assert.equal(div.className, 'nulltest');

		component.testName1 = undefined;
		component.testName2 = 'test';
		await component.$tick();
		assert.equal(div.className, 'undefinedtest');

		component.testName1 = undefined;
		component.testName2 = undefined;
		await component.$tick();
		assert.equal(div.className, 'NaN');

		component.testName1 = null;
		component.testName2 = 1;
		await component.$tick();
		assert.equal(div.className, '1');

		component.testName1 = undefined;
		component.testName2 = 1;
		await component.$tick();
		assert.equal(div.className, 'NaN');

		component.testName1 = null;
		component.testName2 = 0;
		await component.$tick();
		assert.equal(div.className, '0');

		component.testName1 = undefined;
		component.testName2 = 0;
		await component.$tick();
		assert.equal(div.className, 'NaN');
	}
};
