import fileInclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg"; // в назві картинки не повинно бути пробілів, тег img в одну строку
import versionNumber from "gulp-version-number";
import pug from "gulp-pug";

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "HTML",
                message: "Error: <%= error.message %>"
            }))
        )
        // .pipe(fileInclude())       // Закоментувати для pug,

        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))       // <-- для шляхві при компонентах

        // .pipe(pug({              // Розкоментувати для pug     
        //     // Стиснення HTML файлу
        //     pretty: true,
        //     // Показувати в терміналі, який файл оброюлюється
        //     verbose: true
        // }))
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(webpHtmlNosvg())  // не працює
        .pipe(
            versionNumber({
                'value': '%DT%',
                'append': {
                    'key': '_v',
                    'cover': 0,
                    'to': [
                        'css',
                        'js',
                    ]
                },
                'output': {
                    'file': 'gulp/version.json'
                }
            })
        )
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream());
}