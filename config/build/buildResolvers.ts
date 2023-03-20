import webpack from 'webpack';

export default function buildResolvers(src: string): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [
            src, 'node_modules',
        ],
        mainFiles: ['index'],
        alias: {},
    };
}
