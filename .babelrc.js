module.exports = function (api) {
    api.cache(true);

    const presets = [
        [
            '@babel/preset-env',
            {
                targets: {
                    browsers: ['last 2 versions', 'safari >= 7'],
                },
            },
        ],
        '@babel/preset-react',
    ];

    const plugins = ['@babel/plugin-proposal-class-properties'];

    const babelrc = {
        presets,
        plugins,
    };

    return babelrc;
};
