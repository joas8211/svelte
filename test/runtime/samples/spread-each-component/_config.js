export default {
	html: `
		<div data-a="1" data-b="2"></div>
		<div data-a="3" data-b="4"></div>
	`,

	props: {
		things: [
			{ a: 1, b: 2 },
			{ a: 3, b: 4 }
		]
	},

	async test({ assert, component, target }) {
		const { things } = component;

		component.things = things.reverse();
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<div data-a="3" data-b="4"></div>
			<div data-a="1" data-b="2"></div>
		`);
	}
};
