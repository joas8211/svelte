export default {
	skip_if_ssr: true,

	props: {
		raw: '<span><em>raw html!!!\\o/</span></em>'
	},

	html: 'before<span><em>raw html!!!\\o/</span></em>after',

	async test({ assert, component, target }) {
		component.raw = '';
		await component.$tick();
		assert.equal(target.innerHTML, 'beforeafter');
		component.raw = 'how about <strong>unclosed elements?';
		await component.$tick();
		assert.equal(target.innerHTML, 'beforehow about <strong>unclosed elements?</strong>after');
		component.$destroy();
		assert.equal(target.innerHTML, '');
	}
};
