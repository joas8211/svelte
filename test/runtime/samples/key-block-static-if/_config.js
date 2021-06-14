export default {
	html: `
		<section>
			<div>Second</div>
		</section>
		<button>Click</button>
	`,
	async test({ assert, component, target, window }) {
		const button = target.querySelector('button');

		await button.dispatchEvent(new window.Event('click'));
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<section>
				<div>First</div>
				<div>Second</div>
			</section>
			<button>Click</button>
		`);
	}
};
