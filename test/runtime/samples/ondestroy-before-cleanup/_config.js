import container from './container.js';

export default {
	async test({ assert, component, target }) {
		container.div = null;

		const div = target.querySelector('div');

		component.visible = false;
		await component.$tick();
		assert.equal(container.div, div);
	}
};
