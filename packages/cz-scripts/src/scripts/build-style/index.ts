import path from 'path'
import gulp from 'gulp'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'

const root = process.cwd()

async function main() {
  const sass = gulpSass(dartSass)
  const styleRoot = path.resolve(path.resolve(root, '../', 'cz-styles'))
  await gulp
    .src(path.resolve(path.resolve(styleRoot, 'src/**')))
    .pipe(sass.sync())
    .pipe(gulp.dest(path.resolve(styleRoot, 'dist')))
}

export default main
