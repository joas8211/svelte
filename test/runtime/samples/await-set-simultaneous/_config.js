export default {
	async test({ assert, component, target }) {
		const promise = Promise.resolve().then(async () => {
			component.answer = 42;
			await component.$tick();
		});

		component.promise = promise;
		await component.$tick();

		assert.htmlEqual(target.innerHTML, '<p>wait for it...</p>');

		return promise
			.then(() => {
				assert.htmlEqual(target.innerHTML, `
					<p>the answer is 42!</p>
				`);
			});
	}
};
