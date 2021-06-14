let fulfil;

let thePromise = new Promise(f => {
	fulfil = f;
});

export default {
	props: {
		thePromise
	},

	html: '',

	test({ assert, component, target }) {
		fulfil(42);

		return thePromise
			.then(async () => {
				assert.htmlEqual(target.innerHTML, '');

				let reject;

				thePromise = new Promise((f, r) => {
					reject = r;
				});

				component.thePromise = thePromise;
				await component.$tick();

				assert.htmlEqual(target.innerHTML, '');

				reject(new Error('something broke'));

				return thePromise.catch(() => {});
			})
			.then(() => {
				assert.htmlEqual(target.innerHTML, `
					<p>oh no! something broke</p>
				`);
			});
	}
};
