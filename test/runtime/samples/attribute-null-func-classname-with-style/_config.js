export default {
	props: {
		testName: 'testClassName'
	},

	html: '<div class="testClassName svelte-x1o6ra"></div>',

	async test({ assert, component, target }) {
		const div = target.querySelector('div');
		assert.equal(div.className, 'testClassName svelte-x1o6ra');

		component.testName = null;
		await component.$tick();
		assert.equal(div.className, ' svelte-x1o6ra');

		component.testName = undefined;
		await component.$tick();
		assert.equal(div.className, ' svelte-x1o6ra');

		component.testName = undefined + '';
		await component.$tick();
		assert.equal(div.className, 'undefined svelte-x1o6ra');

		component.testName = null + '';
		await component.$tick();
		assert.equal(div.className, 'null svelte-x1o6ra');

		component.testName = 1;
		await component.$tick();
		assert.equal(div.className, '1 svelte-x1o6ra');

		component.testName = 0;
		await component.$tick();
		assert.equal(div.className, '0 svelte-x1o6ra');

		component.testName = false;
		await component.$tick();
		assert.equal(div.className, 'false svelte-x1o6ra');

		component.testName = true;
		await component.$tick();
		assert.equal(div.className, 'true svelte-x1o6ra');

		component.testName = {};
		await component.$tick();
		assert.equal(div.className, '[object Object] svelte-x1o6ra');

		component.testName = '';
		await component.$tick();
		assert.equal(div.className, ' svelte-x1o6ra');
	}
};
