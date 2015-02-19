// gulp.task('bower', function() { 
//     return bower()
//          .pipe(gulp.dest(config.bowerDir)) 
// });

// gulp.task('icons', function() { 
//     return gulp.src(config.bowerDir + '/fontawesome/fonts/**.*') 
//         .pipe(gulp.dest('./app/assets/fonts')); 
// });

// gulp.task('css', function() { 
// 	return gulp.src(config.sassPath + '/main.scss')
// 		 .pipe(sass({
// 			style: 'compressed',
// 			 loadPath: [
// 				 './app/assets/sass',
// 				 config.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
// 				 config.bowerDir + '/fontawesome/scss',
// 		   ]
// 	 }) 
// 	.on("error", notify.onError(function (error) {
// 		 return "Error: " + error.message;
// 	}))) 
// 	 .pipe(gulp.dest('./public/css')); 
// });

// // Rerun the task when a file changes
//  gulp.task('watch', function() {
//      gulp.watch(config.sassPath + '/**/*.scss', ['css']); 
// });

//   gulp.task('default', ['bower', 'icons', 'css']);