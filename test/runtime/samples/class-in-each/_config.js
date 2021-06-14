export default {
	props: {
		things: ['one', 'two', 'three'],
		selected: 'two'
	},

	html: `
		<div></div>
		<div class="selected"></div>
		<div></div>
	`,

	async test({ assert, component, target }) {
		component.selected = 'three';
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<div></div>
			<div class=""></div>
			<div class="selected"></div>
		`);
	}
};
