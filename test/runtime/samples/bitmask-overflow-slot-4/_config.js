export default {
	html: `
		<p>_0_1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_17_18_19_20_21_22_23_24_25_26_27_28_29_30_31_32_33_34_35_36_37_38_39_40</p>
		<p>0</p>
		<p>0</p>
		<button></button>
	`,

	async test({ assert, component, target, window }) {
		// change from inside
		const button = target.querySelector('button');
		await button.dispatchEvent(new window.MouseEvent('click'));
		await component.$tick();
		assert.htmlEqual(target.innerHTML, `
			<p>_0_1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_17_18_19_20_21_22_23_24_25_26_27_28_29_30_31_32_33_34_35_36_37_38_39_40</p>
			<p>0</p>
			<p>1</p>
			<button></button>
		`);

		// change from outside
		component._0 = 'a';
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<p>_0_1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_17_18_19_20_21_22_23_24_25_26_27_28_29_30_31_32_33_34_35_36_37_38_39_40</p>
			<p>a</p>
			<p>1</p>
			<button></button>
		`);

		// change from outside through props
		component._40 = 'b';
		await component.$tick();

		assert.htmlEqual(target.innerHTML, `
			<p>_0_1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_17_18_19_20_21_22_23_24_25_26_27_28_29_30_31_32_33_34_35_36_37_38_39b</p>
			<p>a</p>
			<p>1</p>
			<button></button>
		`);
	}
};
