export default {
	html: `<button>undef</button>
	<button>null</button>
	<button>invalid</button>`,

	async test({ assert, component, target, window }) {
		const [buttonUndef, buttonNull, buttonInvalid] = target.querySelectorAll(
			'button'
		);

		const event = new window.MouseEvent('click');
		let err = '';
		window.addEventListener('error', (e) => {
			e.preventDefault();
			err = e.message;
		});

		// All three should not throw if proper checking is done in runtime code
		await buttonUndef.dispatchEvent(event);
		await component.$tick();
		assert.equal(err, '', err);

		await buttonNull.dispatchEvent(event);
		await component.$tick();
		assert.equal(err, '', err);

		await buttonInvalid.dispatchEvent(event);
		await component.$tick();
		assert.equal(err, '', err);
	}
};
