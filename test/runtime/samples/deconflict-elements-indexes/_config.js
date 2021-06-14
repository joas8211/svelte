export default {
	html: `
		<div>
			<i>one</i>
		</div>
	`,

	preserveIdentifiers: true,

	async test({ assert, component, target }) {
		const { tagList } = component;
		tagList.push('two');
		component.tagList = tagList;
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<div>
				<i>one</i>
				<i>two</i>
			</div>
		`);
	}
};
