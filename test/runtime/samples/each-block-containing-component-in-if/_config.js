export default {
	props: {
		show: false,
		fields: [1, 2]
	},

	html: '<div></div>',

	async test({ assert, component, target }) {
		component.show = true;
		component.fields = [1, 2, 3];
		await component.$tick();

		assert.htmlEqual( target.innerHTML, `
			<div>
				<span>1</span>
				<span>2</span>
				<span>3</span>
			</div>
		` );

		component.fields = [1, 2, 3, 4];
		await component.$tick();

		assert.htmlEqual( target.innerHTML, `
			<div>
				<span>1</span>
				<span>2</span>
				<span>3</span>
				<span>4</span>
			</div>
		` );
	}
};
