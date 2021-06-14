export default {
	immutable: true,

	html: `
		<div>
			<h3>Called 1 times.</h3>
			<p>baz true</p>
		</div>
	`,

	ssrHtml: `
		<div>
			<h3>Called 0 times.</h3>
			<p>baz false</p>
		</div>`,

	async test({ assert, component, target }) {
		const nested = component.nested;

		assert.htmlEqual(target.innerHTML, `
			<div>
				<h3>Called 1 times.</h3>
				<p>baz true</p>
			</div>
		`);

		// eslint-disable-next-line no-self-assign
		nested.foo = nested.foo;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<div>
				<h3>Called 1 times.</h3>
				<p>baz true</p>
			</div>
		`);
	}
};
