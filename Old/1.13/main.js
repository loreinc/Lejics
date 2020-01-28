let fs = require("fs");
let dict = require("./modules/dictionary.js").dict;

let lexer = require("./modules/lexer.js").lexer;

let parser = require("./modules/parser.js").parser;
let path = fs.readFileSync("cfg/curretPath.ljcfg");
							let iv = require('iconv-lite');
							path = iv.decode(path, 'windows-1251');
let cpath = fs.readFileSync("cfg/curretPathClean.ljcfg");
							iv = require('iconv-lite');
							cpath = iv.decode(cpath, 'windows-1251');
/* COLORS
SETTING'S:
	\x1b[0m - reset
	\x1b[1m - bright
	\x1b[2m - dim
	\x1b[4m - underscore
	\x1b[5m - blink
	\x1b[7m - reverse
	\x1b[8m - hidden
FONT:
	\x1b[30m - black
	\x1b[33m - yellow
	\x1b[31m - green
	\x1b[32m - red
	\x1b[34m - blue
	\x1b[35m - magenta
	\x1b[36m - cyan
	\x1b[37m - white
BACKGROUND:
	\x1b[40m - black
	\x1b[43m - yellow
	\x1b[41m - green
	\x1b[42m - red
	\x1b[44m - blue
	\x1b[45m - magenta
	\x1b[46m - cyan
	\x1b[47m - white


*/

fs.readFile(path,"utf-8", function (error,content) {
	if(!error) {
		
		//console.log(require("./modules/lexer.js").mainf);
		let lcode = lexer(content, dict);
		dict['main'] = false;
		//console.log(dict);
		process.stdout.write('\033c');
//console.log(require("./modules/lexer.js"));
		console.log("\x1b[32m###############################################");

		console.log("##          Creator: Alexandr Ustinov        ##");
		console.log("##   Vk page: https://vk.com/sasha_ustinov   ##");
		console.log("##    Lejics version: Release Colors v1.13   ##");
		console.log("###############################################");
		console.log();
		console.log();
		console.log();
		console.log("_______________________________________________\x1b[37m");
		//let tarr = [" 1",1];
		//console.log(Number(2+2));
		//console.log("!=lil".replace(/\!\=/gim,""));
		//let objt = {};
		//console.log(Array.isArray(objt));
		/*
		
		dev mode before PARSING
	    *///console.log(JSON.stringify(lcode,null,4));
	    /*

	   */
	   //console.log((1+2)*2+("i"+"six")*2);
		//console.log();
		//console.log(lcode);
		//console.log(1.isString);
	//	console.log(typeof 1.2);
//		console.log(typeof "1");
	//	console.log(typeof {});
	//	console.log(typeof ["ja"]);
		parser(lcode,dict);

		//dev mode after
		console.log(dict['ms']);
		//                                                                console.log(Array.isArray(var));
		//console.log(JSON.stringify(lcode,null,4)); //Function structure
		//console.log(dict); //Dictionary & memory system(vars;arrays)
		////console.log(lcode);
		//console.log();
		//console.log("allright")

		/* type solution var's
		if (/\"(.*)\"/gim.test(cval)) {
					eval("Object.assign(dict['ms'], { " + cval+ ": { 'status' : 'var','value' : '', 'type' : 'string'}});");
				} else if (Number(cval)) {
					eval("Object.assign(dict['ms'], { " + cval+ ": { 'status' : 'var','value' : '', 'type' : 'integer'}});");
				}
				*/
	} else {
		//console.log(path1);

		console.error('duck say: error man |_|')
	}
	
	//console.log(JSON.stringify(lcode,null,4));
});