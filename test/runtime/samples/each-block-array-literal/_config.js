export default {
	html: `
		<button>racoon</button>
		<button>eagle</button>
	`,

	async test({ assert, component, target }) {
		assert.htmlEqual(target.innerHTML,`
			<button>racoon</button>
			<button>eagle</button>
		`);

		const button = target.querySelector('button');
		const event = new window.MouseEvent('click');

		button.dispatchEvent(event);
		await component.$tick();
		assert.equal(component.clicked, 'racoon');
	}
};
