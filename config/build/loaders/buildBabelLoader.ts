const buildBabelLoader = () => ({
    test: /\.(js|jsx|ts|tsx)$/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
        },
    },
    exclude: /node_modules/,
});

export default buildBabelLoader;
