export default {
	async test({ assert, component, target }) {
		component.q = 42;
		component.foo = true;
		await component.$tick();

		assert.htmlEqual( target.innerHTML, `
			<p>42</p>
		` );
	}
};
