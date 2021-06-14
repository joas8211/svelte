export default {
	props: {
		visible: false
	},

	html: '<div><div>before me</div></div>',

	async test({ assert, component, target }) {
		component.visible = true;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, '<div><div>i am visible</div><div>before me</div></div>' );
	}
};
