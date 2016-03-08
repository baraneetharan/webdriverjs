var gulp = require('gulp');
var mocha = require('gulp-mocha');
var util = require('gulp-util');
var open = require('gulp-open');
 
gulp.task('test', function () {
    return gulp.src(['spec/*.js'], { read: false })
        .pipe(mocha({ reporter: 'mochawesome',
    reporterOptions: {
      reportName: 'custom_ReportName',
      reportTitle: 'custom_ReportTitle',
      inlineAssets: true
    } }))
        .on('error', util.log);
});

gulp.task('open', function(){
  gulp.src('./mochawesome-reports/custom_ReportName.html')
  .pipe(open());
});