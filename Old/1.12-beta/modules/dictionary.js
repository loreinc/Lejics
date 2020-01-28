let dict = {
	"function" : {
		if : function () {
			// body...
		},
		
		var : function() {
			
			
		},
		input : function () {
			// body... let inputf = readline.createInterface(process.stdin,process.stdout);
		},
		clrscr : function () {
			 
		},
		que : function() {

		},
		say : function(el) {
			// string/int/longint/infinity. without var's. var's in parser
			
			console.log(el)
		},
		"v&s" : function() {

		},
		range : function() {

		},
		/*vas : function() {

		},*/

		"//" : function(){
			
		},
		arr : function() {
			
		},
		while : function() {

		},
		for : function() {

		},
		"file.ReadLine" : function() {

		}

		
		
		/*qa : function (q) {
			const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(q + " ", (answer) => {
  // TODO: Log the answer in a database
  let myans = answer;
  console.log(myans);

  rl.close();
});

	},*/
	
	}
		
}
module.exports.dict = dict;