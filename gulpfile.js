// Основний модуль
import gulp from "gulp";
import ghPages from "gulp-gh-pages"; // <-- ES-стиль імпорту
// Імпорт шляхів
import { path } from "./gulp/config/path.js";
// Імпорт загальних плагінів
import { plugins } from "./gulp/config/plugins.js";

// Імпорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";

// Передаємо значення в глобальну змінну
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}

// Спостерігач за змінами в файлах
function watcher () {
    gulp.watch(path.watch.files, {delay: 8000}, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

export { svgSprive }

//Послідовне оброблення шрифтів
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// Основні задачі
const mainTasks = gulp.series(fonts, svgSprive, gulp.parallel(copy, html, scss, js, images));

// Побудова сценаріїв за замовчуванням
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

// Виконання сценарію по замовчуванню
gulp.task('default', dev);


gulp.task('deploy', function () {
    return gulp.src('./dist/**/*')
      .pipe(ghPages());
  });