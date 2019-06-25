/**
 * Подключение файла настроек
 */
global.projectConfig = require('./projectConfig.json');

/**
 * Глобальные переменные
 */
global.$ = {
    path: projectConfig.path,
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(),
}

/**
 * Настройка путей для html
 */
$.path.src.html[0] = $.path.src.srcPath + $.path.src.html[0];
$.path.dist.html = $.path.dist.distPath + $.path.dist.html;
$.path.src.html.push( "!" + $.path.src.html[0].slice(0, -5) + "_*.pug" );
$.path.watch.html = [
    $.path.src.html[0],
    $.path.src.srcPath + $.path.src.blocksDirName
];


/**
 * Подключение тасков
 */
$.path.task = require('./gulp/paths/tasks.js');
$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});



/**
 * Запуск тасков
 */

$.gulp.task('default', $.gulp.series(
   	
    $.gulp.parallel(
        'pug'
    ), 
    $.gulp.parallel(
        'watch',
        'serve'
    )
));




console.log($.path);