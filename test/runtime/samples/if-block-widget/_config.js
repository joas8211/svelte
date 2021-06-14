export default {
	props: {
		visible: true
	},

	html: `
		before
		<p>Widget</p>
		after
	`,

	async test({ assert, component, target }) {
		component.visible = false;
		await component.$tick();
		assert.htmlEqual( target.innerHTML, `
			before

			after
		` );

		component.visible = true;
		await component.$tick();
		assert.htmlEqual( target.innerHTML, `
			before
			<p>Widget</p>
			after
		` );
	}
};
