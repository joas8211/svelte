export default {
	html: '<p>50</p>',

	async test({ assert, component, target }) {
		component.range = [50, 100];
		await component.$tick();
		assert.htmlEqual(target.innerHTML, '<p>75</p>');

		component.range = [50, 60];
		await component.$tick();
		assert.htmlEqual(target.innerHTML, '<p>55</p>');

		component.x = 8;
		await component.$tick();
		assert.htmlEqual(target.innerHTML, '<p>58</p>');
	}
};
