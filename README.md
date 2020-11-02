# gatsby-plugin-meeshkan-recorder

> Add the Meeshkan Recorder script to any Gatsby website

## Install

```bash
npm install --save gatsby-meeshkan-recorder
```

## Usage

```js
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-meeshkan-recorder`,
      options: {
        // Your Meeshkan Recorder Client ID
        clientId: `xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx`,
      },
    },
  ],
};
```

## Development

By default `gatsby-plugin-meeshkan-recorder` will only load and run the recorder script when `process.env.NODE_ENV === 'production'`.
To enable gtag in development mode set the environment variable `GATSBY_MEESHKAN_RECORDER_DEBUG=true gatsby develop`.

## Credits

- This Gatsby plugin is a fork of [`gatsby-plugin-gtag`](https://github.com/flpvsk/gatsby-plugin-gtag) by [flpvsk](https://github.com/flpvsk).

## License

MIT
