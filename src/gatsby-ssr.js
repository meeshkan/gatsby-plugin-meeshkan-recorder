import React from 'react';

const MEESHKAN_RECORDER_SRC = `https://recorder.meeshkan.com/record.js`;

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
	if (pluginOptions && pluginOptions.clientId) {
		const recorderScript = (
			<script
				key="meeshkan-recorder-script"
				src={`${MEESHKAN_RECORDER_SRC}?client_id=${pluginOptions.clientId}`}
			/>
		);

		return setHeadComponents([recorderScript]);
	}
};
