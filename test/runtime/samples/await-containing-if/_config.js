let fulfil;

const thePromise = new Promise(f => {
	fulfil = f;
});

export default {
	props: {
		thePromise,
		show: true
	},

	html: `
		<div><p>loading...</p></div>
	`,

	test({ assert, component, target }) {
		fulfil(42);

		return thePromise
			.then(async () => {
				assert.htmlEqual(target.innerHTML, `
					<div><p>the value is 42</p></div>
				`);

				component.show = false;
				await component.$tick();
				assert.htmlEqual(target.innerHTML, '<div></div>');

				component.show = true;
				await component.$tick();
				assert.htmlEqual(target.innerHTML, `
					<div><p>the value is 42</p></div>
				`);
			});
	}
};
