export default {
	props: {
		things: [
			{ name: 'a' },
			{ name: 'b' },
			{ name: 'c' }
		]
	},

	async test({ assert, component, target, window, raf }) {
		const divs = target.querySelectorAll( 'div' );

		component.things = [
			{ name: 'a' },
			{ name: 'c' }
		];
		await component.$tick();

		const divs2 = target.querySelectorAll( 'div' );
		assert.strictEqual( divs[0], divs2[0] );
		assert.strictEqual( divs[1], divs2[1] );
		assert.strictEqual( divs[2], divs2[2] );

		raf.tick( 50 );
		assert.equal( divs[0].foo, undefined );
		assert.equal( divs[1].foo, 0.5 );
		assert.equal( divs[2].foo, undefined );
	}
};
