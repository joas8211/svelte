export default {
	html: `
		<button>action</button>
	`,
	async test({ assert, component, target, window }) {
		assert.equal(target.querySelector('button').foo, 'bar1337');
	}
};
