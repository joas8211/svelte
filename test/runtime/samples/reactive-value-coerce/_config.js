export default {
	html: '1-1',

	test: async ({ assert, component, target }) => {
		component.a.b[0] = 2;
		component.a = component.a; // eslint-disable-line no-self-assign
		await component.$tick();

		assert.htmlEqual(target.innerHTML, '2-2');
	}
};
