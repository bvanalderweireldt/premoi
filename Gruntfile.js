APP_PATH = 'front/';
SRC_PATH = APP_PATH + 'static_src';
DEST_PATH = 'static';

SASS_PATH = SRC_PATH + '/sass/';
COFFEE_PATH = SRC_PATH + '/coffee/';

JS_PATH = DEST_PATH + '/js/';
CSS_PATH = DEST_PATH + '/css/';

SASS_MAIN = SASS_PATH + 'main.scss';
SASS_ALERT_MOI = SASS_PATH + 'alertmoi.scss';
COFFEE_PREMOI = COFFEE_PATH + '*.coffee';

module.exports = function(grunt) {

	// Configuration goes here
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch:{
			sass:{
				files: SASS_PATH + '*',
				tasks: ['sass', 'cssmin']
			},
			coffee:{
				files: COFFEE_PATH + '*',
				tasks: ['coffee', 'uglify']
			}
		},
		sass: {
			dist: {
				files: {
					'static/css/main.css' : SASS_MAIN,
				}
			}
		},
		coffee: {
			options: {
				bare: true
			},
			compile: {
				files: {
					'static/js/premoi.js' : [ COFFEE_PREMOI ]
				}
			}
		},
		cssmin: {
			options: {
				banner: '/*! <%= pkg.author %> <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			minify: {
				expand: true,
				cwd: CSS_PATH,
				src: ['*.css', '!*.min.css'],
				dest: CSS_PATH,
				ext: '.min.css'
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.author %> <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			my_target: {
				files: {
					'static/js/premoi.min.js': ['static/js/*.js', '!static/js/*min.js']
				}
			}
		},
		csslint:{
			options: {
				import: 2,
				force:true
			},
			src: [CSS_PATH + 'main.css']
		},
		clean: [ JS_PATH + 'premoi.js', CSS_PATH + 'main.css']
	});
	// Load plugins here
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');
	// Define your tasks here
	grunt.registerTask('default', ['sass', 'coffee', 'cssmin', 'uglify', 'csslint', 'clean']);
	};
