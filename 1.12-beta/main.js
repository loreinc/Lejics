let fs = require("fs");
let dict = require("./modules/dictionary.js").dict;

let lexer = require("./modules/lexer.js").lexer;

let parser = require("./modules/parser.js").parser;


fs.readFile("sc.lejics","utf-8", function (error,content) {
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
	    //console.log(JSON.stringify(lcode,null,4));
		//console.log();
		parser(lcode,dict);
		//console.log(JSON.stringify(lcode,null,4));
		//console.log(lcode);
		//console.log();
		//console.log("allright")
		console.log(dict);
	} else {
		console.error('duck say: error bitch')
	}
	
	//console.log(JSON.stringify(lcode,null,4));
});