export default {
	html: '<button>click me</button>',

	async test({ assert, component, target }) {
		const button = target.querySelector('button');
		const messages = [];

		const log = console.log;
		console.log = msg => {
			messages.push(msg);
		};

		try {
			button.dispatchEvent(new window.MouseEvent('click'));
			await component.$tick();
			assert.deepEqual(messages, [
				'clicked'
			]);
		} catch (err) {
			console.log = log;
			throw err;
		}

		console.log = log;
	}
};
