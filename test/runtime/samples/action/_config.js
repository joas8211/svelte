export default {
	html: `
		<button>action</button>
	`,

	async test({ assert, component, target, window }) {
		const button = target.querySelector('button');
		const eventEnter = new window.MouseEvent('mouseenter');
		const eventLeave = new window.MouseEvent('mouseleave');

		await button.dispatchEvent(eventEnter);
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<button>action</button>
			<div class="tooltip">Perform an Action</div>
		`);

		await button.dispatchEvent(eventLeave);
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<button>action</button>
		`);
	}
};
