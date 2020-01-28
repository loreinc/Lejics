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
//console.log(path);
/*fs.readFile("cfg/curretPath.ljcfg","utf-8", function (error,content) {
	if(!error) {
		console.log(content);
		cpath = content;
		//console.log(path1);
	} else {
		console.log("Some problems in 'curretPath.ljcfg' file.");
	}});

fs.readFile("cfg/curretPathClean.ljcfg","utf-8", function (error,content) {
	if(!error) {
		cpath = content;
	} else {
		console.log("Some problems in 'curretPathClean.ljcfg' file.");
	}});
//console.log(path1); */
fs.readFile(path,"utf-8", function (error,content) {
	if(!error) {
		let lcode = lexer(content, dict);
		process.stdout.write('\033c');

		console.log("\x1b[32m###############################################");

		console.log("##          Creator: Alexandr Ustinov        ##");
		console.log("##   Vk page: https://vk.com/sasha_ustinov   ##");
		console.log("##     Lejics version: Release Beta v1.12    ##");
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