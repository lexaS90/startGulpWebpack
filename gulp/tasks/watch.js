module.exports = function() {
    $.gulp.task('watch', function() {
        $.gulp.watch($.path.watch.html, $.gulp.series('pugFast'));
        $.gulp.watch($.path.watch.style, $.gulp.series('scss'));
    });
};