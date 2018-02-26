var gulp = require('gulp'),
  connect = require('gulp-connect-php'),
  browserSync = require('browser-sync'), // ライブリロード
  plumber = require('gulp-plumber'), // 強制終了防止
  sass      = require('gulp-sass'), // sass
  autoprefixer = require("gulp-autoprefixer"), // ベンダープレフィックス
  cssmin = require('gulp-cssmin'),
  rename = require('gulp-rename'),
  notify = require('gulp-notify'),
  csscomb = require('gulp-csscomb'),
  cleancss = require('gulp-clean-css'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify')
;

// 各種作業ファイルを指定するよ
var assets_folfer = './public_html/newrecruit/assets/',
    src = assets_folfer + './src/',
    dest = assets_folfer + './dest/';

// ライブリロード
gulp.task('browser-sync', function() {
  browserSync({
      server: {
           baseDir: './public_html/'       //対象ディレクトリ
          ,index  : "index.html"      //インデックスファイル
      }
  });
});

gulp.task('bs-reload', function() {
  browserSync.reload();
});


gulp.task('sass', function(){
 gulp.src(src + 'sass/**/*scss')
    .pipe(plumber())
    .pipe(sass({
      includePaths: require('node-reset-scss').includePath
    }))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest(dest + 'css'))
    .pipe(csscomb())
    .pipe(cleancss())
    //.pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(dest + "cssmin/"))
    ;
});

gulp.task('js',function(){         //タスク名と、その処理内容
  return gulp.src(src + 'js/default/*js')
    .pipe(concat('default.js'))     //concatで結合したファイル名を指定。
    .pipe(uglify())                //uglifyで圧縮
    .pipe(gulp.dest(dest + 'js/'));　　　//gulp.dest()で処理されたファイルの出力先を指定。
});
gulp.task('js',function(){         //タスク名と、その処理内容
  return  gulp.src(src + 'js/individual/*js')
    .pipe(uglify())                //uglifyで圧縮
    .pipe(gulp.dest(dest + 'js/'));
});
gulp.task('default', ['browser-sync'], function() {
  gulp.watch(src + 'sass/**/*scss', ['sass']);
  gulp.watch([src + 'js/default/*js', src + 'js/individual/*js'], ['js']);
  gulp.watch(["./**/*.html", dest + "cssmin/**/*.css", dest + "js/**/*.js" , dest + "css/**/*.css"] ,['bs-reload']);
  // gulp.watch([src + "cssmin/*.css"] ,['bs-reload']);
});


