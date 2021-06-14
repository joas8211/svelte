export default {
	props: {
		animalPawsEntries: [
			['raccoon', 'hands'],
			['eagle', 'wings']
		]
	},

	html: `
		<p>raccoon: hands</p>
		<p>eagle: wings</p>
	`,

	async test({ assert, component, target }) {
		component.animalPawsEntries = [['foo', 'bar']];
		await component.$tick();
		assert.htmlEqual( target.innerHTML, `
			<p>foo: bar</p>
		`);
	}
};
