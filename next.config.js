const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
    cssModules: true,
    webpack: (config, { defaultLoaders }) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            Components: path.resolve(__dirname, 'components/'),
            Styles: path.resolve(__dirname, 'styles/'),
            Scripts: path.resolve(__dirname, 'scripts/')
        };
        return config;
    }
});