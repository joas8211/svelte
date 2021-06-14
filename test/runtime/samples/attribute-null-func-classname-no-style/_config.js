export default {
	props: {
		testName: 'testClassName'
	},

	html: '<div class="testClassName"></div>',

	async test({ assert, component, target }) {
		const div = target.querySelector('div');
		assert.equal(div.className, 'testClassName');

		component.testName = null;
		await component.$tick();
		assert.equal(div.className, '');

		component.testName = undefined;
		await component.$tick();
		assert.equal(div.className, '');

		component.testName = undefined + '';
		await component.$tick();
		assert.equal(div.className, 'undefined');

		component.testName = null + '';
		await component.$tick();
		assert.equal(div.className, 'null');

		component.testName = 1;
		await component.$tick();
		assert.equal(div.className, '1');

		component.testName = 0;
		await component.$tick();
		assert.equal(div.className, '0');

		component.testName = false;
		await component.$tick();
		assert.equal(div.className, 'false');

		component.testName = true;
		await component.$tick();
		assert.equal(div.className, 'true');

		component.testName = {};
		await component.$tick();
		assert.equal(div.className, '[object Object]');

		component.testName = '';
		await component.$tick();
		assert.equal(div.className, '');
	}
};
