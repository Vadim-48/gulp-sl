import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css';  //Стиснення CSS файлу
import webpcss from 'gulp-webpcss';  // Вивід WEBP зображень
import autoprefixer from 'gulp-autoprefixer';  // Додавання вендорних префіксів
import groupCssMediaQueries from 'gulp-group-css-media-queries';  // Групування медіа запитів

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: true})
    .pipe(app.plugins.plumber({
        errorHandler: function (err) {
            console.error('❌ SCSS ERROR:\n' + err.message);
            this.emit('end'); // Не даёт задаче зависнуть
        }
    }))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    // .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(groupCssMediaQueries())
    .pipe(webpcss(
        {
            webpClass: ".webp",
            noWebpClass: ".no-webp"
        }
    ))
    .pipe(autoprefixer({
        grid: true,
        overrideBrowserslist: ["last 3 versions"],
        cascade: true
    }))

    .pipe(app.gulp.dest(app.path.build.css)) // Не стиснений варіант файлу стилів. Закоментувати, якщо не потрібен
    // .pipe(cleanCss())        // Стиснений варіант файлу стилів. Закоментувати (6 рядків), якщо не потрібен
    // .pipe(rename({
    //     extname: ".min.css"
    // }))
    // .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
}