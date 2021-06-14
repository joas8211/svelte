export default {
	async test({ assert, component, target }) {
		const btns = target.querySelectorAll('button');
		const event = new window.MouseEvent('click');

		await btns[0].dispatchEvent(event);
		await component.$tick();
		await btns[0].dispatchEvent(event);
		await component.$tick();
		await btns[1].dispatchEvent(event);
		await component.$tick();
		await btns[1].dispatchEvent(event);
		await component.$tick();
		await btns[1].dispatchEvent(event);
		await component.$tick();
		assert.equal(btns[1].innerHTML, '3');
	}
};
