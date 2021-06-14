export default {
	props: {
		thePromise: 'not actually a promise'
	},

	html: `
		<p>the value is not actually a promise</p>
	`,

	async test({ assert, component, target }) {
		component.thePromise = 'still not a promise';
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<p>the value is still not a promise</p>
		`);
	}
};
