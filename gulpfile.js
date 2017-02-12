var gulp = require('gulp');
var browserSync = require('browser-sync').create()

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    })
})

gulp.task('reload', function() {
    browserSync.reload();
})

gulp.task('watch', ['browserSync'], function() {
    gulp.watch(['app/*.html', 'app/js/*.js', 'app/css/*.css'],  ['reload']);

});


gulp.task('default', ['watch']);


