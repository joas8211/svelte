export default {
	async test({ assert, target, window }) {
		const Component = require('./Component.svelte').default;

		const called = [];
		const component = await Component.init({
			target,
			context: new Map([
				['key', 'svelte'],
				['fn', (value) => called.push(value)]
			])
		});
		assert.htmlEqual(target.innerHTML, '<div>svelte</div><button></button>');

		const button = target.querySelector('button');
		await button.dispatchEvent(new window.MouseEvent('click'));
		await component.$tick();
		assert.deepEqual(called, ['hello world']);

		component.$destroy();
	},
	async test_ssr({ assert }) {
		const Component = require('./Component.svelte').default;

		const called = [];
		const { html } = await Component.render(undefined, { context: new Map([
			['key', 'svelte'],
			['fn', (value) => called.push(value)]
		]) });
		assert.htmlEqual(html, '<div>svelte</div><button></button>');
	}
};
