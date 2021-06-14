export default {
	props: {
		visible: true,
		empty: []
	},

	html: `
		<div>
			<p>text</p>
		</div>
	`,

	async test({ assert, component, target }) {
		component.visible = false;
		await component.$tick();

		assert.htmlEqual(target.innerHTML, '');
	}
};
