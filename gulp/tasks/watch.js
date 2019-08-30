module.exports = function() {
    $.gulp.task('watch', function() {
        $.gulp.watch($.path.watch.html, $.gulp.series('pugFast'));
    });
};