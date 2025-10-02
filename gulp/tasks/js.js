import webpack from "webpack-stream";
import { globSync } from "glob";
import path from "path";

export const js = () => {
    // Create an entry object for all JS files in src/js/
    const entries = {};
    globSync(`${app.path.srcFolder}/js/*.js`).forEach(file => {
        const name = path.basename(file, path.extname(file)); // e.g., main.js → main
        entries[name] = path.resolve(file); // Use absolute path for entry
    });

    return app.gulp.src(`${app.path.src.js}` /*, { sourcemaps: true }*/) // Sourcemaps disabled
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "JS",
                message: "Error: <%= error.message %>"
            }))
        )
        .pipe(webpack({
            mode: 'none', // No production or development mode
            entry: entries, // Multiple entry points
            output: {
                filename: '[name].js', // Output file named after entry key
            },
            // devtool: 'source-map', // Source maps generation disabled
            optimization: {
                minimize: false // Disable JS minification
            }
        }))
        .pipe(app.gulp.dest(app.path.build.js)) // Output files to dist/js/
        .pipe(app.plugins.browsersync.stream()); // Reload browser with BrowserSync
};