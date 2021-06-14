export default {
	html: `
		<div data-a="1" data-b="2"></div>
		<div data-c="3" data-d="4"></div>
	`,

	props: {
		things: [
			{ 'data-a': 1, 'data-b': 2 },
			{ 'data-c': 3, 'data-d': 4 }
		]
	},

	async test({ assert, component, target }) {
		const { things } = component;

		component.things = things.reverse();
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<div data-c="3" data-d="4"></div>
			<div data-a="1" data-b="2"></div>
		`);
	}
};
