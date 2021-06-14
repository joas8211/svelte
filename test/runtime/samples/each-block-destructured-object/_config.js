export default {
	props: {
		animalPawsEntries: [
			{ animal: 'raccoon', pawType: 'hands' },
			{ animal: 'eagle', pawType: 'wings' }
		]
	},

	html: `
		<p>raccoon: hands</p>
		<p>eagle: wings</p>
	`,

	async test({ assert, component, target }) {
		component.animalPawsEntries = [{ animal: 'cow', pawType: 'hooves' }];
		await component.$tick();
		assert.htmlEqual( target.innerHTML, `
			<p>cow: hooves</p>
		`);
	}
};
