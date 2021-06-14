export default {
	html: `
		<button>toggle</button>
		<p>0</p>
		<button>handler_a</button>
		<button>handler_b</button>
	`,

	async test({ assert, component, target, window }) {
		const [toggle, handler_a, handler_b] = target.querySelectorAll('button');
		const p = target.querySelector('p');

		const event = new window.MouseEvent('click');

		await handler_a.dispatchEvent(event);
		await component.$tick();
		assert.equal(p.innerHTML, '1');

		await toggle.dispatchEvent(event);
		await component.$tick();
		await handler_a.dispatchEvent(event);
		await component.$tick();
		assert.equal(p.innerHTML, '2');

		await toggle.dispatchEvent(event);
		await component.$tick();
		await handler_b.dispatchEvent(event);
		await component.$tick();
		assert.equal(p.innerHTML, '1');

		await toggle.dispatchEvent(event);
		await component.$tick();
		await handler_b.dispatchEvent(event);
		await component.$tick();
		assert.equal(p.innerHTML, '2');
	}
};
