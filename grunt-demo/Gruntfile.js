// grunt 插件 http://www.gruntjs.net/plugins

//var mozjpeg = require('imagemin-mozjpeg');
module.exports = function (grunt) {

	// config
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),

		/**
		 * 设置目录地址
		 */
		dir : {
			css : '<%= pkg.src %>/css',
			js : '<%= pkg.src %>/js',
			img : '<%= pkg.src %>/images',
			html : '<%= pkg.src %>',
			sass : '<%= pkg.src %>/css',
			less : '<%= pkg.src %>/css'
		},
		destImages : '<%= pkg.dest %>/images',
		destCss : '<%= pkg.dest %>/css',
		destJs : '<%= pkg.dest %>/js',
		destHtml : '<%= pkg.dest %>',

		img : {
			task1 : {
				src : ['<%= dir.img %>/**/*.{png,jpg,gif}'],
				dest : '<%=destImages%>'
			}
		},

				/**
		 * 复制文件
		 * @https://www.npmjs.com/package/grunt-contrib-copy
		 */
		copy : {
			jsdest : {
				/*
				options:{
				process:function(content, srcpath){
				return content.replace(/[-]/g,'_');
				}
				},
				 */
				files : [{
						expand : true,
						cwd : '<%= dir.js %>',
						src : ['**/*.min.js'],
						dest : '<%=destJs%>',
						filter : 'isFile'
					}
				]
			},

			cssdest : {
				files : [{
						expand : true,
						cwd : '<%= dir.css %>',
						src : ['**/*.min.css'],
						dest : '<%=destCss%>',
						filter : 'isFile'
					}
				]
			},

			mediadest : {
				files : [{
						expand : true,
						cwd : '<%= pkg.src %>',
						src : ['**/*.{swf,flv,mp3}'],
						dest : '<%= pkg.dest %>',
						filter : 'isFile'
					}
				]
			}
		},
		/**
		 * Minify js
		 * @ https://www.npmjs.com/package/grunt-contrib-uglify
		 */
		uglify : {
			options : {
				banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build : {
				files : [{
						expand : true,
						cwd : '<%= dir.js %>',
						src : ['**/*.js', '!**/*.min.js'],
						dest : '<%=destJs%>'
					}
				]
			}
		},

		/**
		 * cssmin
		 * @https://www.npmjs.com/package/grunt-contrib-cssmin
		 */
		cssmin : {
			options : {
				shorthandCompacting : false,
				roundingPrecision : -1
			},
			dist : {
				files : [{
          expand : true,
          cwd : '<%= dir.css %>',
          src : ['**/*.css', '!**/*.min.css'],
          dest : '<%=destCss%>'
          //ext:'.min.css'
				}]
      }
		},

		/**
		 * htmlmin
		 * @https://www.npmjs.com/package/grunt-contrib-htmlmin
		 */
		htmlmin : { // Task
			dist : { // Target
				options : { // Target options

					// process:function(content, srcpath){
					// 	var staticREG = /.*\/(:.*\.(css$|js$|png$)|[^\.]*$)/;
					// 	return content.replace(/[-]/g,'_');
					// },
					removeComments : true,
					collapseWhitespace : true
				},
				files : [{
						expand : true,
						cwd : '<%= pkg.src %>',
						src : ['**/*.html', '!**/node_modules', '!**/build'],
						dest : '<%=destHtml%>'
					}
				]
			}
		},
		/**
		 * Concatenate files
		 * @https://www.npmjs.com/package/grunt-contrib-concat
		 */

		concat : {
			options : {
				separator : ';',
				stripBanners : true,
				banner : '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %> */',
			},
			dist : {
				src : ['<%= dir.js%>/*.js'],
				dest : '<%= destJs %>/built.js',
			}
		},
		/**
		 * imagemin
		 * @https://www.npmjs.com/package/grunt-contrib-imagemin
		 */
		// imagemin:{
		// 	dist:{
		// 		options: { // Target options
		//       optimizationLevel: 3,
		//       svgoPlugins: [{ removeViewBox: false }],
		//       use: [mozjpeg()]
		//     },
		// 		files:[{
		// 			expand:true,
		// 			cwd:'<%= dir.img %>',
		// 			src:['**/*.{png,jpg,gif}'],
		// 			dest:'<%=destImages%>'
		// 		}]
		// 	}
		// },

		/*
		 * optimize png and jpg images
		 * @https://www.npmjs.com/package/grunt-img
		 */

		img : {
			task1 : {
				src : ['<%= dir.img %>/**/*.{png,jpg,gif}'],
				dest : '<%=destImages%>'
			}
		},

		// replace: {
		//    dist: {
		//      options: {
		//        patterns: [
		//          {
		//            match: '/foo/g',
		//            replacement: 'bar'
		//          }
		//        ]
		//      },
		//      files: [
		//        {expand: true, flatten: true, src: [pkg.actName + '**/*.html'], dest: pkg.actName + '/build/'}
		//      ]
		//    }
		//  },


		/**
		 * js代码校验
		 * @https://github.com/gruntjs/grunt-contrib-jshint
		 */
		jshint : {
			options : {
				curly : true,
				eqeqeq : true,
				eqnull : true,
				browser : true,
				globals : {
					jQuery : true
				},
				reporter : require('jshint-stylish')
			},
			files : {
				src : ['<%= dir.js %>/**/*.js', '!<%= dir.js %>/**/*.min.js']
			}
		},

		/**
		 * less 2 css
		 * @https://www.npmjs.com/package/grunt-contrib-less
		 */
		less : {
			development : {
				files : [{
						expand : true,
						cwd : '<%= pkg.src %>',
						src : 'css/**/*.less',
						dest : '<%= pkg.src %>',
						ext : '.css'
					}
				]
			},
			/*
			production: {
			options: {
			paths: ["assets/css"],
			plugins: [
			new require('less-plugin-autoprefix')({browsers: ["last 2 versions"]}),
			new require('less-plugin-clean-css')(cleanCssOptions)
			],
			modifyVars: {
			imgPath: '"http://mycdn.com/path/to/images"',
			bgColor: 'red'
			}
			},
			files: {
			"path/to/result.css": "path/to/source.less"
			}
			}
			 */
		},

		// sass
		sass : {
			dist : {
				files : [{
						expand : true,
						cwd : '<%= pkg.src %>',
						src : ['**/*.scss'],
						dest : '<%= pkg.dest %>',
						ext : '.css'
					}
				]
			}
		},

		/**
		 * Clean files and folders
		 * @https://www.npmjs.com/package/grunt-contrib-clean
		 */
		clean : {
			release : ['<%= pkg.dest %>']
		},

		// 代码监听
		watch : {
			options : {
				livereload : true,
			},
			// js:{
			// 	files:['<%= dir.js%>/**/*.js'],
			// 	tasks:['default'],
			// 	options:{
			// 		//interrupt: true,
			// 		spawn:false //If you need to dynamically modify your config, the spawn option must be disabled to keep the watch running under the same context
			// 	}
			// },
			sass : {
				files : ['<%= dir.css %>/**/*.{sass,scss}'],
				tasks : ['sass'],
			},
			lessTarget : {
				files : ['<%= dir.css%>/**/*.less'],
				tasks : ['less'],
				options : {
					//interrupt: true,
					spawn : true //If you need to dynamically modify your config, the spawn option must be disabled to keep the watch running under the same context
				}
			}
		}

	});

	// load plugin
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	//grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-img');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.loadNpmTasks('grunt-replace');

	grunt.registerTask('default', ['clean', 'uglify', 'less', 'cssmin', 'img', 'htmlmin', 'copy']);
	grunt.registerTask('test', ['jshint']);

	// 注意！！任务名不能跟配置里面的字段重名，否则会报错，或者不配置别名
	// 直接 grunt watch
	grunt.registerTask('watcher', ['watch']);
	grunt.registerTask('concater', ['concat']);
	grunt.registerTask('minhtml', ['htmlmin']);
}
