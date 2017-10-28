const Encore = require('@symfony/webpack-encore');

Encore
    // the project directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    // uncomment to create hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())
    .enableReactPreset()

    .enableSassLoader()
    .addEntry('js/app', './assets/js/app.js')
    .addStyleEntry('css/app', './assets/css/app.scss')
;

module.exports = Encore.getWebpackConfig();
