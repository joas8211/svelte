import * as path from 'path';

export default {
	props: {
		a: 1
	},

	html: `
		<p>foo 1</p>
	`,

	before_test() {
		delete require.cache[path.resolve(__dirname, 'components.js')];
	},

	async test({ assert, component, target }) {
		component.a = 2;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<p>foo 2</p>
		`);
	}
};
