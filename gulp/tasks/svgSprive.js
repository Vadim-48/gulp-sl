import svgSprite from "gulp-svg-sprite";
export const svgSprive = () => {
    return app.gulp.src(`${app.path.src.svgicons}`, {})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "SVG",
            message: "Error: <%= error.message %>"
        }))
    )
    .pipe(svgSprite({
        mode: {
            symbol: {
                sprite: '../icons/icons.svg',

                example: true
            }
        },
        shape: {
            id: {
                separator: '-',
                generator: 'icon-%s'     // Example: icon-home, icon-user
            }
        }
    }
    ))
    .pipe(app.gulp.dest(`${app.path.build.images}`));
}