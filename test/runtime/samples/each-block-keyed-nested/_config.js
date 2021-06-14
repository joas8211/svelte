export default {
	html: `
		1
	`,

	async test({ assert, component, target }) {
		component.desks = [
			{
				id: 1,
				teams: []
			}
		];
		await component.$tick();

		assert.htmlEqual(target.innerHTML, '');
	}
};
