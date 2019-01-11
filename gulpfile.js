    var gulp = require('gulp'); // Подключаем Gulp
    var less = require('gulp-less'); //Подключаем less пакет
    var browserSync = require('browser-sync'); // Подключаем Browser Sync
    var gcmq = require('gulp-group-css-media-queries');//подключаем group-css-media-queries
 



   var smartgrid = require('smart-grid'); 
/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'less', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '30px', /* gutter width px || % */
    container: {
        maxWidth: '1200px', /* max-width оn very large screen */
        fields: '30px' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1100px', /* -> @media (max-width: 1100px) */
            fields: '30px' /* side fields */
        },
        md: {
            width: '960px',
            fields: '15px'
        },
        sm: {
            width: '780px',
            fields: '15px'
        },
        xs: {
            width: '560px',
            fields: '15px'
        }
        /* 
        We can create any quantity of break points.
 
        some_name: {
            some_width: 'Npx',
            some_offset: 'N(px|%)'
        }
        */
    }
}; 
smartgrid('app/lib', settings);


    // https://habrahabr.ru/post/259225/
    //функция перехватывает ошибки , но gulp watch не подвисает и его не надо перезапускать
    function wrapPipe(taskFn) {  
        return function(done) {
         var onSuccess = function() {
           done();
         };
         var onError = function(err) {
           done(err);
         }
         var outStream = taskFn(onSuccess, onError);
         if(outStream && typeof outStream.on === 'function') {
           outStream.on('end', onSuccess);
         }
        }
    }

    //реагируем на ошибки
    gulp.task('less', wrapPipe(function(success, error) { // Создаем таск less
    return  gulp.src('app/less/*.less')                   // Берем источник
            .pipe(less().on('error', error))              // Преобразуем less в CSS посредством gulp-less
            .pipe(gulp.dest('app/css-do-group'))          // Выгружаем результата в папку app/css-do-group
    }));


gulp.task('default', function () { //группируем css стили 
    gulp.src('app/css-do-group/*.css') // берём источник
    .pipe(gcmq())           // выполняем группировку
    .pipe(gulp.dest('app/css/css-do-postcss'))// выгружаем результат
   // .pipe(browserSync.reload({stream: true}))  // Обновляем CSS на странице при изменении
});



gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});


gulp.task('watch', [ 'browser-sync','less'], function() {
	  gulp.watch('app/less/*.less', ['less']); // Наблюдение за less файлами
    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/*.js', browserSync.reload);   // Наблюдение за JS файлами в папке js
    gulp.watch('app/css-do-group/*.css', ['default']); // Наблюдение за css файлами
    gulp.watch('app/css/css/*.css', browserSync.reload);   // Наблюдение за JS файлами в папке js
});

