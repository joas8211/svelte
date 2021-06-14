export default {
	props: {
		animalPawsEntries: [
			['raccoon', 'hands'],
			['eagle', 'wings']
		]
	},

	html: `
		<p>hands</p>
		<p>wings</p>
	`,

	async test({ assert, component, target }) {
		component.animalPawsEntries = [['foo', 'bar']];
		await component.$tick();
		assert.htmlEqual( target.innerHTML, `
			<p>bar</p>
		`);
	}
};
