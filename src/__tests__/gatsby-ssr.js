const { onRenderBody } = require(`../gatsby-ssr`);

describe(`gatsby-plugin-meeshkan-recorder`, () => {
	it(`injects a script tag if clientId is set`, async () => {
		const pluginOptions = {
			clientId: 'b00ecdd5-d1f7-4a87-9d1f-142cc16c78d8',
		};

		const setHeadComponents = jest.fn();

		await onRenderBody(
			{
				setHeadComponents,
			},
			pluginOptions
		);

		expect(setHeadComponents).toMatchSnapshot();
		expect(setHeadComponents).toHaveBeenCalledTimes(1);
	});

	it(`does not inject a script tag if clientId is not set`, async () => {
		const pluginOptions = {};
		const setHeadComponents = jest.fn();

		await onRenderBody(
			{
				setHeadComponents,
			},
			pluginOptions
		);

		expect(setHeadComponents).toMatchSnapshot();
		expect(setHeadComponents).toHaveBeenCalledTimes(0);
	});
});
