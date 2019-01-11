﻿var gulp = require('gulp'); // Подключаем Gulp
var postcss = require('gulp-postcss'); //подключаем postcss
var autoprefixer = require('autoprefixer');//плагин для postcss , autoprefixer создаёт префиксы
var magician = require('postcss-font-magician'); //плагин для postcss , подключение шрифтов c google , выбираем протокол https:
var pixrem  = require('pixrem');

//https://www.youtube.com/watch?v=GRwy9JiIshY
//подключаем postcss и плагины
gulp.task('postcss', function () {
    var plugins = [
        //автопрефиксы для нескольких последних версий браузера
        autoprefixer({browsers: ['last 25 version']}),
        //подключение шрифтов c google , выбираем протокол https:
        magician({foundries: ['google'],protocol: ['https:']}),
        //переводим rem в px
        pixrem
        
    ];
 return  gulp.src('css-do-postcss/*.css')    // берём источник
        .pipe(postcss(plugins))                    // прогоняем чезер плагины
        .pipe(gulp.dest('css'));               // выгружаем результат
});



gulp.task('watch', function() {
    gulp.watch('css-do-postcss/*.css', ['postcss']); // Наблюдение за css файлами   
});
