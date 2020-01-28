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
		addfunc : function() {

		},
		constant : function() {

		},
		emulate : function() {

		}

		
		
		
	
	},
	"rusfunction" : {
		длина :"range",
		если :"if",
		
		переменная : "var",
		ввод : "input",
		очистить : "clrscr",
		
		сказать : "say",
		
		

		
		массив : "arr",
		пока : "while",
		для : "for",
		
		"лого.вкл" : "logo.on",
		"лого.выкл" : "logo.off",
		"##включить" : "##include",
		функция : "addfunc",
		константа : "constant",
		эмулировать : "emulate"

		
		
		
	
	
	},
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
			
		}

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