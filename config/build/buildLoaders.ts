import webpack from 'webpack';
import {
    buildBabelLoader,
    buildCssLoader,
    buildFileLoader,
    buildSvgLoader,
    buildTypescriptLoader,
} from './loaders';

export default function buildLoaders(isDev: boolean): webpack.RuleSetRule[] {
    const svgLoader = buildSvgLoader();
    const babelLoader = buildBabelLoader();

    const cssLoader = buildCssLoader(isDev);

    // Если не используем тайпскрипт - нужен babel-loader
    const typescriptLoader = buildTypescriptLoader();

    const fileLoader = buildFileLoader();

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ];
}
