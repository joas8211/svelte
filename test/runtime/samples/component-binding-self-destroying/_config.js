export default {
	props: {
		show: true
	},

	html: `
		<button>Hide</button>
	`,

	async test({ assert, component, target, window }) {
		const click = new window.MouseEvent('click');

		await target.querySelector('button').dispatchEvent(click);
		await component.$tick();
		assert.equal(component.show, false);
		assert.htmlEqual(target.innerHTML, `
			<button>Show</button>
		`);

		await target.querySelector('button').dispatchEvent(click);
		await component.$tick();
		assert.equal(component.show, true);
		assert.htmlEqual(target.innerHTML, `
			<button>Hide</button>
		`);
	}
};
