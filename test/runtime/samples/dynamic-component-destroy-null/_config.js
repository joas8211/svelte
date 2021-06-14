export default {
	props: {
		x: true
	},

	async test({ assert, component }) {
		component.x = false;
		await component.$tick();
	}
};
