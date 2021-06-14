export default {
	props: {
		x: 42
	},

	html: `
		<p>42 42</p>
	`,

	async test({ assert, component, target }) {
		component.x = 43;
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<p>43 43</p>
		`);
	}
};
