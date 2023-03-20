import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import buildLoaders from './buildLoaders';
import buildPlugins from './buildPlugins';
import buildResolvers from './buildResolvers';
import { BuildOptions } from './types/config';

const BuildWebpackConfig = (options: BuildOptions): webpack.Configuration => ({
    cache: false,
    mode: options.mode,
    entry: options.paths.entry,
    output: {
        filename: 'bundle.[contenthash].js',
        path: options.paths.build,
        clean: true,
    },
    plugins: buildPlugins(options),
    module: {
        rules: buildLoaders(options.isDev),
    },
    resolve: buildResolvers(options.paths.src),
    devtool: options.isDev ? 'inline-source-map' : undefined,
    devServer: options.isDev ? buildDevServer(options.port) : undefined,
});

export default BuildWebpackConfig;
