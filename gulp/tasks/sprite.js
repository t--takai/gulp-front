import gulp from 'gulp';
import spritesmith from 'gulp.spritesmith';
import imagemin from 'gulp-imagemin';
import buffer from 'vinyl-buffer';
import { spritesmithConfig, imageminConfig } from '../config';

const srpite = () => {
	let spriteData = gulp.src(
		[ '**/*.png', '!**/_*.png' ],
		{ cwd: 'source/static/sprite' }
	)
		.pipe(spritesmith(spritesmithConfig));

	spriteData.img.pipe(buffer())
		.pipe(imagemin(imageminConfig.images))
		.pipe(gulp.dest('dest/assets/images'));

	spriteData.css.pipe(buffer())
		.pipe(gulp.dest('tmp'));

	return spriteData.img.pipe(buffer());
};

export default srpite;
