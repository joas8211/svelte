export default {
	html: `
		<button>remove</button>
		<button>remove</button>
		<button>remove</button>
	`,

	async test({ assert, component, target, window }) {
		const click = new window.MouseEvent('click');

		await target.querySelectorAll('button')[1].dispatchEvent(click);
		await component.$tick();
		await target.querySelectorAll('button')[1].dispatchEvent(click);
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<button>remove</button>
		`);
	}
};
