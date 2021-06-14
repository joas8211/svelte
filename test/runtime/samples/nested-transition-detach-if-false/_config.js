export default {
	html: `
		<li>
			<span>a</span>
			<ul>
				<li>
					<span>a/b</span>
					<ul>
						<li>a/b/c</li>
					</ul>
				</li>
			</ul>
		</li>
	`,

	async test({ assert, component, target }) {
		component.folder.open = false;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<li>
				<span>a</span>
			</li>
		`);
	}
};
