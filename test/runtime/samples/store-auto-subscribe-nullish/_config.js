import { writable } from '../../../../store';

export default {
	html: `
		<p>undefined</p>
	`,
	async test({ assert, component, target }) {
		component.store = writable('foo');
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<p>foo</p>
		`);
	}
};
