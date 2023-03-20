const buildSvgLoader = () => ({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
});

export default buildSvgLoader;
