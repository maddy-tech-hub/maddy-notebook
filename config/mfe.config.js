/* eslint-disable @typescript-eslint/no-var-requires */
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('../package.json').dependencies;

module.exports = {
    mfePlugin: new ModuleFederationPlugin({
        name: 'maddy-notebook', // Unique name for the shell app
        filename: 'remoteEntry.js', // The file where exposed modules are listed
        exposes: {}, // Add exposed modules here if needed
        remotes: {
            maddy_mfe: 'maddy_mfe@https://mfe-components.netlify.app/remoteEntry.js',
        },
        shared: {
            ...deps,
            react: { singleton: true, requiredVersion: deps.react },
            'react-dom': {
                singleton: true,
                requiredVersion: deps['react-dom'],
            },
        },
    })
}