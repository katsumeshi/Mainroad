var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer")

gulp.task("scss", async function () {
    gulp.src("src/scss/**/*.scss")
        .pipe(sass({
            outputStyle : "compressed"
        }))
        .pipe(autoprefixer())
        .pipe(gulp.dest("static/css"))
})

// Watch asset folder for changes
gulp.task("watch", gulp.series("scss", async function () {
    gulp.watch("src/scss/**/*", gulp.series("scss"))
}))

gulp.task("default", gulp.series("watch"))