let dict = {
	"function" : {
		if : function () {
			
		},
		"/*" : function() {

		},
		var : function() {
			
			
		},
		input : function () {
			
		},
		clrscr : function () {
			 
		},
		que : function() {

		},
		say : function(el) {
		//	console.log("aaa")
			try {
			console.log(el.replace(/&%5/gim, "+").replace(/&%6/gim, "-").replace(/&%7/gim, "*").replace(/&%8/gim, "/").replace(/&%s0/gim, " ").replace(/&=dq/gim,'\"'))
		}catch(err) {
			console.log(el)
		}
		},
		"v&s" : function() {

		},
		range : function() {

		},
		

		"//" : function(){
			
		},
		arr : function() {
			
		},
		while : function() {

		},
		for : function() {

		},
		
		"logo.on" : function() {

		},
		"logo.off" : function() {

		},
		"##include" : function() {

		},
		function : function() {

		},
		constant : function() {

		},
		emulate : function() {

		},
		end : function() {

		}

		
		
		
	
	},
	"rusfunction" : {
		длина :"range",
		если :"if",
		переменная : "var",
		ввод : "input",
		очистить : "clrscr",
		сказать : "say",
		конец : "end",
		массив : "arr",
		пока : "while",
		для : "for",
		"лого.вкл" : "logo.on",
		"лого.выкл" : "logo.off",
		"##включить" : "##include",
		функция : "function",
		константа : "constant",
		эмулировать : "emulate"
	},
	"main" : true,
	"fcv" : [],
	"fms" : {
		"temp" : {
			"code" : "code",
			"return" : "true/false",
			"return-value" : {
				"type" : "var",
				"value" : "varname"
			},
			"args" : []
			/*"ms" : {
				'lejics' : {
			'status' : 'const',
			'value' : 'in dev',
			"type" : "string",
			"ArgNumber" : 1,
			"namespace" : "global"
			
		}
			}*/
		}
	},
	"ms" : {
		'lejics' : {
			'status' : 'const',
			'value' : 'in dev',
			'type' : "string"
			
		},
		'true' : {
			'status' : 'const',
			'value' : true,
			'type' : "string"
		},
		'false' : {
			'status' : 'const',
			'value' : false,
			'type' : "string"
		},
		'green' : {
			'status' : 'const',
			'value' : '\x1b[32m',
			'type' : "string"
		},
		'yellow' : {
			'status' : 'const',
			'value' : '\x1b[33m',
			'type' : "string"
		},
		'blue' : {
			'status' : 'const',
			'value' : '\x1b[34m',
			'type' : "string"
		},
		'magenta' : {
			'status' : 'const',
			'value' : '\x1b[35m',
			'type' : "string"
		},
		'cyan' : {
			'status' : 'const',
			'value' : '\x1b[36m',
			'type' : "string"
		},
		'white' : {
			'status' : 'const',
			'value' : '\x1b[37m',
			'type' : "string"
		},
		'red' : {
			'status' : 'const',
			'value' : '\x1b[31m',
			'type' : "string"
		},
		'dim' : {
			'status' : 'const',
			'value' : '\x1b[2m',
			'type' : "string"
		},
		'underscore' : {
			'status' : 'const',
			'value' : '\x1b[4m',
			'type' : "string"
		},
		'blink' : {
			'status' : 'const',
			'value' : '\x1b[5m',
			'type' : "string"
		},
		'reverse' : {
			'status' : 'const',
			'value' : '\x1b[7m',
			'type' : "string"
		},
		'reset' : {
			'status' : 'const',
			'value' : '\x1b[0m',
			'type' : "string"
		},
		'bright' : {
			'status' : 'const',
			'value' : '\x1b[1m',
			'type' : "string"
		},
		'bgreen' : {
			'status' : 'const',
			'value' : '\x1b[41m',
			'type' : "string"
		},
		'byellow' : {
			'status' : 'const',
			'value' : '\x1b[43m',
			'type' : "string"
		},
		'bblue' : {
			'status' : 'const',
			'value' : '\x1b[44m',
			'type' : "string"
		},
		'bmagenta' : {
			'status' : 'const',
			'value' : '\x1b[45m',
			'type' : "string"
		},
		'bcyan' : {
			'status' : 'const',
			'value' : '\x1b[46m',
			'type' : "string"
		},
		'bwhite' : {
			'status' : 'const',
			'value' : '\x1b[47m',
			'type' : "string"
		},
		'bred' : {
			'status' : 'const',
			'value' : '\x1b[42m',
			'type' : "string"
		},

	},
	"file" : {
		"file.readall" : function() {
			 
		},
		"file.write" : function() {
			 
		},
		"file.readline" : function() {
			 
		},
		"file.rewrite" : function() {
			 
		},
		"file.readlineall" : function() {
			 
		},
	}
		
}
module.exports.dict = dict;