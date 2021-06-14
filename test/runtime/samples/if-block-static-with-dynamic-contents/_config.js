export default {
	props: {
		foo: 42
	},

	html: '<p>42</p>',

	async test({ assert, component, target }) {
		component.foo = 43;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, '<p>43</p>');
	}
};
