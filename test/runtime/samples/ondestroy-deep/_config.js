import { destroyed, reset } from './destroyed.js';

export default {
	async test({ assert, component }) {
		component.visible = false;
		await component.$tick();
		assert.deepEqual(destroyed, ['A', 'B', 'C']);

		reset();
	}
};
