export default {
	html: '<button>???</button>',

	async test({ assert, component, target, window }) {
		const event = new window.MouseEvent('click', {
			clientX: 42,
			clientY: 42
		});

		const button = target.querySelector('button');

		await button.dispatchEvent(event);
		await component.$tick();
		assert.equal(target.innerHTML, '<button>42</button>');
	}
};
