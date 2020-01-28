function parser(lcode, dict) {
	let readline = require("./node_modules/readline-sync/lib/readline-sync.js");
	let inputin = true;
	//const readline = require('readline');
	//console.log("РАБОТАЕТ ТУТ 2 СТРОКА");
	if (lcode && lcode.length !==0) {
		//console.log("РАБОТАЕТ ТУТ 3 СТРОКА");
		for(let i = 0;i < lcode.length; i++){
			let fname = lcode[i]["function"] ? lcode[i]["function"] : lcode[i]["unknown type"];
			let valobj = lcode[i]["value"];
			//let vstr = lcode[i]["vars"];
			if (lcode[i]["function"] && dict["function"][fname.toLowerCase()]) {
				
				if(fname === "//"){
								}
			//console.log(valobj.value);
				
				//console.log('ТУТ ВСЕ РАБОТАЕТ БЛ');
				let cf = dict["function"][fname.toLowerCase()];
				let iv;
				if (valobj.type === "var") {
					if (valobj.value.replace('arr.', '') === valobj.value) {
				for(let y = 0; y<lcode.length; y++){
					if(typeof lcode[y]["vars"] !== "undefined") {
						
						
							

						let spliit = lcode[y]["vars"];
						let splut = spliit.split(" ");
						//console.log(lcode[y].vars) } }
						if(fname = "que"){

						}
						if(splut[0] == valobj.value && inputin === true) {
							
							iv = spliit.replace(valobj.value+" ", '');
							//console.log(iv);
							if(typeof iv !== "undefined"){
								cf(iv);
								
					 }
						}
					}				 //here is VAR SAYING
				}
			} else {
				for(let aS = 0; aS < lcode.length; aS++){
					if(typeof lcode[aS]["arrname"] !== "undefined") {
						
						
							
						let awi = valobj.value.replace('arr.', '');
						awi = awi.split('[');
						let spliit = lcode[aS]["arrname"];
						if (spliit === valobj.value.replace('arr.', '') && valobj.value.replace('arr.', '').replace("[", "") === valobj.value.replace('arr.', '')){
							cf(lcode[aS]['arr']);
						} else if (spliit === awi[0]){
							let index = awi[1].replace("]","");
							let abi = lcode[aS]['arr'][index];
							if(typeof abi !== "undefined"){
							abi = abi.replace('"', "");
							abi = abi.replace('"', "");

							//console.log(abi.replace('"', ""));
							cf(abi);
						} else {
							console.log("\x1b[33m[WARN]\x1b[37m index '" + index + "' empty.");
						}
						}
						}
				}
			}
			} else if (valobj.type === "string"  && inputin === true) {
				/*if(valobj["value"].split("+") !== valobj["value"] && fname === "say"){
					console.log(valobj["value"].split("+"));
					let varn = valobj["value"].split("+");
					
					for(let y = 0; y<lcode.length; y++){
					if(typeof lcode[y]["vars"] !== "undefined") {
						
						
							

						let spliit = lcode[y]["vars"];
						let splut = spliit.split(" ");
						//console.log(lcode[y].vars) } }
						
						if(splut[0] == varn[1] && inputin === true) {
							
							iv = varn[0] + splut[1];
							console.log(iv);
							if(typeof iv !== "undefined"){
								cf(iv);
								
					 }
						}
					}				 //here is VAR SAYING
				}
				}else {*/


				cf(valobj["value"].replace(/['"]+/g, '')); 
			}

			if (fname === "input") {
				let lcodet = lcode;
							let counter = i+1;
							let lcode1 = lcode.slice(0,i+1);
								let lcode2 = lcode.slice(i+1);
								let gs = 0;
								let indexemp = 0;
				let inputt = readline.question('Input: ');
				let obj = {};
				//console.log(inputt);
				Object.assign(obj, { 
									"unknown type" : lcode[i]["varname"],
									
						"value" : {
							"type" : "string",
							"value" : '"'+inputt+'"'
						}}); 
				lcode1.push(obj);
				lcode = lcode1.concat(lcode2);


			//console.log(lcode);

			} 
			if(fname === "v&s") {
				if (lcode[i]["slot1var"] === true && lcode[i]["slot2var"] === false) {
					let job = {};
					let iv1;
				for(let y = 0; y<lcode.length; y++){
					if(typeof lcode[y]["vars"] !== "undefined") {
						
						
							

						let spliit = lcode[y]["vars"];
						let splut = spliit.split(" ");
						//console.log(lcode[y].vars) } }
						
						if(splut[0] === lcode[i]["slot1"]) {
							
							iv = spliit.replace(lcode[i]["slot1"]+" ", '');
							//console.log(iv);
							if(typeof iv !== "undefined"){
								iv1 = iv;
								
					 }
						}
					}				 //here is VAR SAYING
				}
				Object.assign(job, { 
									"unknown type" : lcode[i]["slot1"],
									
						"value" : {
							"type" : "string",
							"value" : iv1 + lcode[i]["slot2"].trim()
						}}); 
				let lcode1 = lcode.slice(0,i+1);
								let lcode2 = lcode.slice(i+1);
lcode1.push(job);				
lcode = lcode1.concat(lcode2);


			}

			if (lcode[i]["slot2var"] === true && lcode[i]["slot1var"] === false) {
					let job = {};
					let iv1;
				for(let y = 0; y<lcode.length; y++){
					if(typeof lcode[y]["vars"] !== "undefined") {
						
						
							

						let spliit = lcode[y]["vars"];
						let splut = spliit.split(" ");
						//console.log(lcode[y].vars) } }
						
						if(splut[0] === lcode[i]["slot2"]) {
							
							iv = spliit.replace(lcode[i]["slot2"]+" ", '');
							//console.log(iv);
							if(typeof iv !== "undefined"){
								iv1 = iv;
								
					 }
						}
					}				 //here is VAR SAYING
				}
				Object.assign(job, { 
									"unknown type" : lcode[i]["slot2"],
									
						"value" : {
							"type" : "string",
							"value" : lcode[i]["slot1"] + iv1
						}}); 
				let lcode1 = lcode.slice(0,i+1);
								let lcode2 = lcode.slice(i+1);
lcode1.push(job);				
lcode = lcode1.concat(lcode2);


			}
			let iv2;
			if (lcode[i]["slot2var"] === true && lcode[i]["slot1var"] === true) {
					let job = {};
					let iv1;
				for(let y = 0; y<lcode.length; y++){
					if(typeof lcode[y]["vars"] !== "undefined") {
						
						
							

						let spliit = lcode[y]["vars"];
						let splut = spliit.split(" ");
						//console.log(lcode[y].vars) } }
						
						if(splut[0] === lcode[i]["slot2"]) {
							
							iv = spliit.replace(lcode[i]["slot2"]+" ", '');
							//console.log(iv);
							if(typeof iv !== "undefined"){
								iv2 = iv;
								
					 }
						}
					}				 //here is VAR SAYING
				}
				for(let y = 0; y<lcode.length; y++){
					if(typeof lcode[y]["vars"] !== "undefined") {
						
						
							

						let spliit = lcode[y]["vars"];
						let splut = spliit.split(" ");
						//console.log(lcode[y].vars) } }
						
						if(splut[0] === lcode[i]["slot1"]) {
							
							iv = spliit.replace(lcode[i]["slot1"]+" ", '');
							//console.log(iv);
							if(typeof iv !== "undefined"){
								iv1 = iv;
								
					 }
						}
					}				 //here is VAR SAYING
				}
				if (typeof lcode[i]["otv"] !== "undefined") {
				Object.assign(job, { 
									"unknown type" : lcode[i]["otv"],
									
						"value" : {
							"type" : "string",
							"value" : iv1 + iv2
						}}); 
			} else {
				Object.assign(job, { 
									"unknown type" : lcode[i]["slot2"],
									
						"value" : {
							"type" : "string",
							"value" : iv1 + iv2
						}}); 
			}
				let lcode1 = lcode.slice(0,i+1);
								let lcode2 = lcode.slice(i+1);
			
lcode1.push(job);				
lcode = lcode1.concat(lcode2);


			}


			}
			if (fname === "clrscr") {
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
								}
			if (fname === "range" && valobj["type"] === "warn") {
				//console.log("\x1b[37m");
				console.log("\x1b[33m[WARN]\x1b[37m 'range' argument error. line: " + valobj["warnl"]);
			//	console.log("\x1b[37m", "");
			}
			if (fname === "range" && valobj['type'] !== "warn") {
				let lcode1 = lcode.slice(0,i+1);
								let lcode2 = lcode.slice(i+1);
				let valuee;
				var readlineSync = require('readline-sync'),
  MAX = lcode[i]['max'], MIN = lcode[i]['min'], value = MAX/2,value = Math.round(value), key;
console.log('\n\n' + (new Array(20)).join(' ') +
  '[Z] <- -> [X]  SELECT: [SPACE]\n');
while (true) {
  console.log('\x1B[1A\x1B[K|' +
    (new Array(value + 1)).join('-') + 'O' +
    (new Array(MAX - value + 1)).join('-') + '| ' + value);
  key = readlineSync.keyIn('',
    {hideEchoBack: true, mask: '', limit: 'zx '});
  if (key === 'z') { if (value > MIN) { value--; } }
  else if (key === 'x') { if (value < MAX) { value++; } }
  else { break; }
}
//console.log('\nA value the user requested: ' + value);
valuee = value;
let obj = {};
Object.assign(obj, { 
									"unknown type" : lcode[i]["varname"],
									
						"value" : {
							"type" : "string",
							"value" :'"' + valuee + '"'
						}}); 
lcode1.push(obj);				
lcode = lcode1.concat(lcode2);
//console.log(lcode1);
			}

			if (fname === "if" && inputin === true) {
				let fvar = lcode[i]["fvar"];
				let znak = lcode[i]["znak"];
				let svar = lcode[i]["svar"];
				let start = "{";
				let end = "}";
				let newline = ",";
				//let mcode = lcode[i]["spcode"];
				//console.log(valobj.value);
				let ccide = valobj['value'].replace(fvar, '');
				let testt = ccide;
				ccide = ccide.replace(znak, '');
				ccide = ccide.replace(svar, '');
				//ccide = ccide.slice(1);
				//console.log(ccide);
				//console.log(ccide.replace('{','').length);
		     	//console.log(ccide.replace('}','').length);
		     	//console.log(valobj.value);
		     	//console.log();
				ccide = ccide.replace(start, '');
				

				//let testt = ccide.slice(0, -1);
		     	//console.log(ccide);
		     	
		     	
		     	
			ccide = ccide.slice(0, -1);
		
			
			
			if (ccide.slice(ccide.length-2) === '} ' && ccide.replace('{','').length === ccide.length) {
				//console.log(ccide);
				ccide = ccide.slice(0, -2);
			}
		//console.log(ccide.toString());
		//	console.log(ccide.slice(0, -1) );
				
				ccide = ccide.trim();
				let mcode = ccide.split(/,(?![^{}]*\})/gim);
					for(let ae = 0;ae < mcode.length;ae++){

					//console.log(mcode[ae]);
					//console.log(mcode[ae].replace(/}/g,""));
					
					//console.log();
					

					if (mcode[ae].replace(/{/gim,"").length < mcode[ae].replace(/}/gim,"").length) {
						
					let mcode1 = mcode.slice(0,ae);
					let cc = mcode[ae];
					let cc2 = cc;
					// //console.log(mcode.slice(0,ae));
					//console.log(mcode.slice(ae+1));
					for(let aea = ae+1; aea < mcode.length;aea++){
					let cc12 = cc+mcode[aea].replace(/{/gim,"");
					let cc13 = cc+mcode[aea].replace(/}/gim,"");
				cc = cc+', '+mcode[aea];
//
						if (cc.replace(/{/gim,"").length < cc.replace(/}/gim,"").length) {
						//	console.log(cc);

						//	cc = cc+mcode[aea];
//
							//console.log(mcode[aea]);
//
							
						} else {
							//console.log(cc);
							//console.log(mcode.slice(aea+1));
							let mcode2 = mcode.slice(aea+1);
							mcode1.push(cc);
							
							//console.log(mcode1);
							mcode = mcode1.concat(mcode2);
							//console.log(mcode);
							//mcode = mcode2;
							//console.log(cc);
							break;
						}
					

					}
			

				} 

			}
			//	console.log(mcode);
			//	console.log(testt);
			//	console.log();
			//	console.log();
				//console.log();
				//console.log();console.log();console.log();console.log();console.log();console.log();console.log();console.log();
				for(let ae = 0;ae < mcode.length;ae++){
					mcode[ae] = mcode[ae].trim();
				}
				//console.log(ccide);
				
				function isInteger(num) {
  return (num ^ 0) === num;
}

				//let test = fvar/1;

				//console.log(isInteger(Number(fvar)));
				if(fvar.split("[").length === 1 && svar.split("[").length === 1) {
				for(let y = 0; y<lcode.length; y++){
					if(typeof lcode[y]["vars"] !== "undefined") {
						let spliit = lcode[y]["vars"];
						let splut = spliit.split(" ");
						//console.log(lcode[y].vars) } }
						if(splut[0] === fvar && fvar.replace('"', "") == fvar) {
						
						
							
							//iv = spliit.replace(valobj.value+" ", '');
							
							if(typeof splut[1] !== "undefined"){
								fvar = splut[1];
								
					 } 

						} else if(splut[0] === svar && svar.replace('"', "") == svar) {
							
							if(typeof splut[1] !== "undefined"){
								svar = splut[1];
								
					 }

						}
					}				 
				} 
			    } else {
			    	if (fvar.split("[").length > 1) {
			    		for(let aS = 0; aS < lcode.length; aS++){
					if(typeof lcode[aS]["arrname"] !== "undefined") {
						
						
							
						let awi = fvar.split('[');
						//awi = awi.split('[');
						let spliit = lcode[aS]["arrname"];
						/*if (spliit === fvar && valobj.value.replace('arr.', '').replace("[", "") === valobj.value.replace('arr.', '')){
							lcode[aS]['arr']
						} else*/ if (spliit === awi[0]){
							let index = awi[1].replace("]","");
							let abi = lcode[aS]['arr'][index];
							if(typeof abi !== "undefined"){
						//	abi = abi.replace('"', "");
						//	abi = abi.replace('"', "");
						fvar = abi;
							//console.log(abi.replace('"', ""));
							
						} else {
							console.log("\x1b[33m[WARN]\x1b[37m index '" + index + "' empty.");
							fvar = "";
						}
						}
						}
				}
			    	}

			    	if (svar.split("[").length > 1) {
			    		for(let aS = 0; aS < lcode.length; aS++){
					if(typeof lcode[aS]["arrname"] !== "undefined") {
						
						
							
						let awi = svar.split('[');
						//awi = awi.split('[');
						let spliit = lcode[aS]["arrname"];
						/*if (spliit === fvar && valobj.value.replace('arr.', '').replace("[", "") === valobj.value.replace('arr.', '')){
							lcode[aS]['arr']
						} else*/ if (spliit === awi[0]){
							let index = awi[1].replace("]","");
							let abi = lcode[aS]['arr'][index];
							if(typeof abi !== "undefined"){
						//	abi = abi.replace('"', "");
						//	abi = abi.replace('"', "");
						svar = abi;
							//console.log(abi.replace('"', ""));
							
						} else {
							console.log("\x1b[33m[WARN]\x1b[37m index '" + index + "' empty.");
							svar = "";
						}
						}
						}
				}
			    	}
			    }
			//    console.log(fvar);
				fvar = fvar.replace(/['"]+/g, "")
				svar = svar.replace(/['"]+/g, "")

				
				//console.log(fvar);
				//console.log(svar);
				////console.log(znak);
				switch(znak) {
					case "=":
					if(Number(fvar)){
						fvar = Number(fvar);
						//console.log("net");
					}
					if(Number(svar)){
						svar = Number(svar);
					}
						if(fvar === svar) {
							
							let lcodet = lcode;
							let counter = i+1;
							let lcode1 = lcode.slice(0,i+1);
								let lcode2 = lcode.slice(i+1);
								let gs = 0;
								let indexemp = 0;
							
							for(let u = 0; u < mcode.length; u++) {

								let codi2 = mcode[u].split(/\s(?=(?:[^'"`]*(['"`])[^'"`]*\1)*[^'"`]*$)/gm);
								let job = {};
								let codi = [];
								//let text;
								for(let ii = 0;ii < codi2.length; ii++){
						if(codi2[ii] !== '"' && typeof codi2[ii] !== "undefined") {
							codi.push(codi2[ii]);
						}
					}
				
								//console.log(codi)
								//console.log(codi.length);
								if (codi[0] !== "if" && dict["function"][codi[0].toLowerCase()]) {
								Object.assign(job, { 
							"function":codi[0]
						});
								//console.log(mcode);
								if (/\"(.*)\"/gim.test(codi[2])) {
								
									//console.log(mcode);
									Object.assign(job, { 
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
									
								} else {
									Object.assign(job, { 
						"value" : {
							"type" : "var",
							"value" : codi[2]
						}});
								}
							} if(!dict["function"][fname.toLowerCase()]) {
								//console.log(codi);
								//console.log();
								Object.assign(job, { 
									"unknown type" : codi[0],
									
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
							}

							 if(codi[0] == "if") {
							 	//console.log(codi);
								let ccd = [];
								let tet;
								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd

			});	
								//console.log(job);

							}
							if(codi[0] == "while") {
								let ccd = [];
								let tet;
								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd

			});
							}


							 if(codi[0] == "for") {
								let ccd = [];
								let tet;
								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd

			});
							}
							if(codi[0] === "//") {
									Object.assign(job, { 
										"value" : {
									"type" : "underfined",
									"value" : "nth"
								}
								
							});
								}if(codi[0] === "var"){
								//console.log("ШОТО НЕ ТАКС");
								Object.assign(job, { 
									"function" : "var",
									"vars" : codi[2] + " ",
						"value" : {
							"type" : "undefined",
							"value" : ""
						}}); 
							} if(!dict["function"][codi[0].toLowerCase()]) {
								//console.log("here");
								Object.assign(job, { 
									
									"unknown type" : codi[0],
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
							}
							if (codi[0] === "input") {
									Object.assign(job, { 
										"value" : {
									"type" : "underfined",
									"value" : codi[2]
								},
								"varname" : codi[2]
							});
								}
								if (codi[0] === "clrscr") {
									 Object.assign(job, {
									 "function" : "clrscr",
										"value" : {
									"type" : "underfined",
									"value" : "th"
								}});
								}
								if(codi[0] === "range"){
									let dc;
									if (codi.length > 3) {
										for(let iai = 2; iai < codi.length; iai++){
											if (iai === 2) {
												dc = codi[iai];
											} else {
											dc = dc + " " + codi[iai];
										}
										}
									}
								let nvo = dc.split("-");
								//console.log(nvo);
								
									if (typeof nvo[0] !== "undefined" && typeof nvo[1] !== "undefined" && typeof nvo[2] !== "undefined") {
									let min = nvo[0].trim();
								//	console.log(min);
									let max = nvo[1].trim();
									let varn = nvo[2].trim();
									Object.assign(job, {
										"value" : {
									"type" : "underfined",
									"value" : "KAVO"
								},
								"min" : min,
								"max" : max,
								"varname" : varn
									});
						 }

						}
						/*if (codi[0] === "say" && codi[2].replace('arr.', '') !== codi[2]) {
							for(let aS = 0; aS < lcode.length; aS++){
					if(typeof lcode[aS]["arrname"] !== "undefined") {
						
						
							
						let awi = codi[2].replace('arr.', '');
						awi = awi.split('[');
						let spliit = lcode[aS]["arrname"];
						if (spliit === codi[2].replace('arr.', '') && codi[2].replace('arr.', '').replace("[", "") === codi[2].replace('arr.', '')){
							cf(lcode[aS]['arr']);
						} else if (spliit === awi[0]){
							let index = awi[1].replace("]","");
							let abi = lcode[aS]['arr'][index];
							if(typeof abi !== "undefined"){
							abi = abi.replace('"', "");
							abi = abi.replace('"', "");

							//console.log(abi.replace('"', ""));
							cf(abi);
						} else {
							console.log("\x1b[33m[WARN]\x1b[37m index '" + index + "' empty.");
						}
						}
						}
				}

						}*/
							if(codi[0] == "v&s"){
								//console.log("A");
								let dc;
									if (codi.length > 3) {
										for(let iai = 2; iai < codi.length; iai++){
											if (iai === 2) {
												dc = codi[iai];
											} else {
											dc = dc + " " + codi[iai];
										}
										}
									}
									//console.log("A");
							
							if (/\"(.*)\"/gim.test(dc)) {
								let all = dc.split("-");
								//	console.log(cval);
									if (typeof all[0] !== "undefined" && typeof all[1] !== "undefined") {
										let a = all[0], b = all[1];
										let c1 = true;
										let c = true;
										if (a.replace('"', "") !== a) {
											c = false;
										}
										if (b.replace('"', "") !== b) {
											c1 = false;
										}
									Object.assign(job, { 
										"value" : {
									"type" : "undefined",
									"value" : dc,

								},
								"slot1" : a.trim(),
									"slot2" : b.trim(),
									"slot1var" : c,
									"slot2var" : c1,

								});
									
								}
							}else{
								let all = dc.split("-");
								//	console.log(cval);
									if (typeof all[0] !== "undefined" && typeof all[1] !== "undefined") {
										let a = all[0], b = all[1];
										let c1 = true;
										let c = true;
										if (a.replace("'", "") !== a) {
											c = false;
										}
										if (b.replace("'", "") !== b) {
											c1 = false;
										}
									Object.assign(job, { 
										"value" : {
									"type" : "undefined",
									"value" : dc,

								},
								"slot1" : a.trim(),
									"slot2" : b.trim(),
									"slot1var" : true,
									"slot2var" : true
								});
									if(typeof all[2] !== "undefined"){
										Object.assign(job, {
											"otv" : all[2].trim()
										});
									}

								}
							} }

							lcode1.push(job);
							

								
							}
							lcode = lcode1.concat(lcode2);
							//console.log(lcode);
							//console.log(lcode);
							
						}
					

											

					break;
					case "!=":
					if(Number(fvar)){
						fvar = Number(fvar);
					}
					if(Number(svar)){
						svar = Number(svar);
					}
						if(fvar !== svar) {
							let lcodet = lcode;
							let counter = i+1;
							let lcode1 = lcode.slice(0,i+1);
								let lcode2 = lcode.slice(i+1);
								let gs = 0;
								let indexemp = 0;
							
							for(let u = 0; u < mcode.length; u++) {

								let codi2 = mcode[u].split(/\s(?=(?:[^'"`]*(['"`])[^'"`]*\1)*[^'"`]*$)/gm);
								let job = {};
								let codi = [];
								//let text;
								for(let ii = 0;ii < codi2.length; ii++){
						if(codi2[ii] !== '"' && typeof codi2[ii] !== "undefined") {
							codi.push(codi2[ii]);
						}
					}
				
								//console.log(codi)
								//console.log(codi.length);
								if (codi[0] !== "if" && dict["function"][codi[0].toLowerCase()]) {
								Object.assign(job, { 
							"function":codi[0]
						});
								//console.log(mcode);
								if (/\"(.*)\"/gim.test(codi[2])) {
								
									//console.log(mcode);
									Object.assign(job, { 
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
									
								} else {
									Object.assign(job, { 
						"value" : {
							"type" : "var",
							"value" : codi[2]
						}});
								}
							} if(!dict["function"][fname.toLowerCase()]) {
								//console.log(codi);
								Object.assign(job, { 
									"unknown type" : codi[0],
									
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
							}

							 if(codi[0] == "if") {
								let ccd = [];
								let tet;
								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd

			});
							}
							if(codi[0] == "while") {
								let ccd = [];
								let tet;
								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd

			});
							}
							 if(codi[0] == "for") {
								let ccd = [];
								let tet;
								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd

			});
							}
							if(codi[0] === "//") {
									Object.assign(job, { 
										"value" : {
									"type" : "underfined",
									"value" : "nth"
								}
								
							});
								}if(codi[0] === "var"){
								//console.log("ШОТО НЕ ТАКС");
								Object.assign(job, { 
									"function" : "var",
									"vars" : codi[2] + " ",
						"value" : {
							"type" : "undefined",
							"value" : ""
						}}); 
							} if(!dict["function"][codi[0].toLowerCase()]) {
								Object.assign(job, { 
									
									"unknown type" : codi[0],
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
							}
							if (codi[0] === "input") {
									Object.assign(job, { 
										"value" : {
									"type" : "underfined",
									"value" : codi[2]
								},
								"varname" : codi[2]
							});
								}
								if (codi[0] === "clrscr") {
									 Object.assign(job, {
									 "function" : "clrscr",
										"value" : {
									"type" : "underfined",
									"value" : "th"
								}});
								}
								if(codi[0] === "range"){
									let dc;
									if (codi.length > 3) {
										for(let iai = 2; iai < codi.length; iai++){
											if (iai === 2) {
												dc = codi[iai];
											} else {
											dc = dc + " " + codi[iai];
										}
										}
									}
								let nvo = dc.split("-");
								//console.log(nvo);
								
									if (typeof nvo[0] !== "undefined" && typeof nvo[1] !== "undefined" && typeof nvo[2] !== "undefined") {
									let min = nvo[0].trim();
								//	console.log(min);
									let max = nvo[1].trim();
									let varn = nvo[2].trim();
									Object.assign(job, {
										"value" : {
									"type" : "underfined",
									"value" : "KAVO"
								},
								"min" : min,
								"max" : max,
								"varname" : varn
									});
						 }
						}
						if(codi[0] == "v&s"){
								//console.log("A");
								let dc;
									if (codi.length > 3) {
										for(let iai = 2; iai < codi.length; iai++){
											if (iai === 2) {
												dc = codi[iai];
											} else {
											dc = dc + " " + codi[iai];
										}
										}
									}
									//console.log("A");
							
							if (/\"(.*)\"/gim.test(dc)) {
								let all = dc.split("-");
								//	console.log(cval);
									if (typeof all[0] !== "undefined" && typeof all[1] !== "undefined") {
										let a = all[0], b = all[1];
										let c1 = true;
										let c = true;
										if (a.replace('"', "") !== a) {
											c = false;
										}
										if (b.replace('"', "") !== b) {
											c1 = false;
										}
									Object.assign(job, { 
										"value" : {
									"type" : "undefined",
									"value" : dc,

								},
								"slot1" : a.trim(),
									"slot2" : b.trim(),
									"slot1var" : c,
									"slot2var" : c1,

								});
									
								}
							}else{
								let all = dc.split("-");
								//	console.log(cval);
									if (typeof all[0] !== "undefined" && typeof all[1] !== "undefined") {
										let a = all[0], b = all[1];
										let c1 = true;
										let c = true;
										if (a.replace("'", "") !== a) {
											c = false;
										}
										if (b.replace("'", "") !== b) {
											c1 = false;
										}
									Object.assign(job, { 
										"value" : {
									"type" : "undefined",
									"value" : dc,

								},
								"slot1" : a.trim(),
									"slot2" : b.trim(),
									"slot1var" : true,
									"slot2var" : true
								});
									if(typeof all[2] !== "undefined"){
										Object.assign(job, {
											"otv" : all[2].trim()
										});
									}

								}
							} }

							lcode1.push(job);
							

								
							}
							lcode = lcode1.concat(lcode2);
						}
					break;
					case ">":
					if(Number(fvar)){
						fvar = Number(fvar);
					}
					if(Number(svar)){
						svar = Number(svar);
					}
						if(fvar > svar) {
							let lcodet = lcode;
							let counter = i+1;
							let lcode1 = lcode.slice(0,i+1);
								let lcode2 = lcode.slice(i+1);
								let gs = 0;
								let indexemp = 0;
							
							for(let u = 0; u < mcode.length; u++) {

								let codi2 = mcode[u].split(/\s(?=(?:[^'"`]*(['"`])[^'"`]*\1)*[^'"`]*$)/gm);
								let job = {};
								let codi = [];
								//let text;
								for(let ii = 0;ii < codi2.length; ii++){
						if(codi2[ii] !== '"' && typeof codi2[ii] !== "undefined") {
							codi.push(codi2[ii]);
						}
					}
				
								//console.log(codi)
								//console.log(codi.length);
								if (codi[0] !== "if" && dict["function"][codi[0].toLowerCase()]) {
								Object.assign(job, { 
							"function":codi[0]
						});
								//console.log(mcode);
								if (/\"(.*)\"/gim.test(codi[2])) {
								
									//console.log(mcode);
									Object.assign(job, { 
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
									
								} else {
									Object.assign(job, { 
						"value" : {
							"type" : "var",
							"value" : codi[2]
						}});
								}
							} if(!dict["function"][fname.toLowerCase()]) {
								//console.log(codi);
								Object.assign(job, { 
									"unknown type" : codi[0],
									
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
							}

							 if(codi[0] == "if") {
								let ccd = [];
								let tet;
								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd

			});
							}
							if(codi[0] == "while") {
								let ccd = [];
								let tet;
								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd

			});
							} 
							if(codi[0] == "for") {
								let ccd = [];
								let tet;
								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd

			});
							}
							if(codi[0] === "//") {
									Object.assign(job, { 
										"value" : {
									"type" : "underfined",
									"value" : "nth"
								}
								
							});
								}if(codi[0] === "var"){
								//console.log("ШОТО НЕ ТАКС");
								Object.assign(job, { 
									"function" : "var",
									"vars" : codi[2] + " ",
						"value" : {
							"type" : "undefined",
							"value" : ""
						}}); 
							} if(!dict["function"][codi[0].toLowerCase()]) {
								Object.assign(job, { 
									
									"unknown type" : codi[0],
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
							}
							if (codi[0] === "input") {
									Object.assign(job, { 
										"value" : {
									"type" : "underfined",
									"value" : codi[2]
								},
								"varname" : codi[2]
							});
								}
								if (codi[0] === "clrscr") {
									 Object.assign(job, {
									 "function" : "clrscr",
										"value" : {
									"type" : "underfined",
									"value" : "th"
								}});
								}
								if(codi[0] === "range"){
									let dc;
									if (codi.length > 3) {
										for(let iai = 2; iai < codi.length; iai++){
											if (iai === 2) {
												dc = codi[iai];
											} else {
											dc = dc + " " + codi[iai];
										}
										}
									}
								let nvo = dc.split("-");
							//	console.log(nvo);
								
									if (typeof nvo[0] !== "undefined" && typeof nvo[1] !== "undefined" && typeof nvo[2] !== "undefined") {
									let min = nvo[0].trim();
								//	console.log(min);
									let max = nvo[1].trim();
									let varn = nvo[2].trim();
									Object.assign(job, {
										"value" : {
									"type" : "underfined",
									"value" : "KAVO"
								},
								"min" : min,
								"max" : max,
								"varname" : varn
									});
						 }
						}
						if(codi[0] == "v&s"){
								//console.log("A");
								let dc;
									if (codi.length > 3) {
										for(let iai = 2; iai < codi.length; iai++){
											if (iai === 2) {
												dc = codi[iai];
											} else {
											dc = dc + " " + codi[iai];
										}
										}
									}
									//console.log("A");
							
							if (/\"(.*)\"/gim.test(dc)) {
								let all = dc.split("-");
								//	console.log(cval);
									if (typeof all[0] !== "undefined" && typeof all[1] !== "undefined") {
										let a = all[0], b = all[1];
										let c1 = true;
										let c = true;
										if (a.replace('"', "") !== a) {
											c = false;
										}
										if (b.replace('"', "") !== b) {
											c1 = false;
										}
									Object.assign(job, { 
										"value" : {
									"type" : "undefined",
									"value" : dc,

								},
								"slot1" : a.trim(),
									"slot2" : b.trim(),
									"slot1var" : c,
									"slot2var" : c1,

								});
									
								}
							}else{
								let all = dc.split("-");
								//	console.log(cval);
									if (typeof all[0] !== "undefined" && typeof all[1] !== "undefined") {
										let a = all[0], b = all[1];
										let c1 = true;
										let c = true;
										if (a.replace("'", "") !== a) {
											c = false;
										}
										if (b.replace("'", "") !== b) {
											c1 = false;
										}
									Object.assign(job, { 
										"value" : {
									"type" : "undefined",
									"value" : dc,

								},
								"slot1" : a.trim(),
									"slot2" : b.trim(),
									"slot1var" : true,
									"slot2var" : true
								});
									if(typeof all[2] !== "undefined"){
										Object.assign(job, {
											"otv" : all[2].trim()
										});
									}

								}
							} }

							lcode1.push(job);
							

								
							}
							lcode = lcode1.concat(lcode2);
						}
					break;
					case "<":
					if(Number(fvar)){
						fvar = Number(fvar);
					}
					if(Number(svar)){
						svar = Number(svar);
					}
						if(fvar < svar) {
							let lcodet = lcode;
							let counter = i+1;
							let lcode1 = lcode.slice(0,i+1);
								let lcode2 = lcode.slice(i+1);
								let gs = 0;
								let indexemp = 0;
							
							for(let u = 0; u < mcode.length; u++) {

								let codi2 = mcode[u].split(/\s(?=(?:[^'"`]*(['"`])[^'"`]*\1)*[^'"`]*$)/gm);
								let job = {};
								let codi = [];
								//let text;
								for(let ii = 0;ii < codi2.length; ii++){
						if(codi2[ii] !== '"' && typeof codi2[ii] !== "undefined") {
							codi.push(codi2[ii]);
						}
					}
				
								//console.log(codi)
								//console.log(codi.length);
								if (codi[0] !== "if" && dict["function"][codi[0].toLowerCase()]) {
								Object.assign(job, { 
							"function":codi[0]
						});
								//console.log(mcode);
								if (/\"(.*)\"/gim.test(codi[2])) {
								
									//console.log(mcode);
									Object.assign(job, { 
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
									
								} else {
									Object.assign(job, { 
						"value" : {
							"type" : "var",
							"value" : codi[2]
						}});
								}
							} if(!dict["function"][fname.toLowerCase()]) {
								//console.log(codi);
								Object.assign(job, { 
									"unknown type" : codi[0],
									
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
							}

							 if(codi[0] == "if") {
								let ccd = [];
								let tet;
								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd

			});
							}
							if(codi[0] == "while") {
								let ccd = [];
								let tet;
								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd

			});
							} 
							if(codi[0] == "for") {
								let ccd = [];
								let tet;
								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd

			});
							}
							if(codi[0] === "//") {
									Object.assign(job, { 
										"value" : {
									"type" : "underfined",
									"value" : "nth"
								}
								
							});
								}if(codi[0] === "var" ){
								//console.log("ШОТО НЕ ТАКС");
								Object.assign(job, { 
									"function" : "var",
									"vars" : codi[2] + " ",
						"value" : {
							"type" : "undefined",
							"value" : ""
						}}); 
							} if(!dict["function"][codi[0].toLowerCase()]) {
								Object.assign(job, { 
									
									"unknown type" : codi[0],
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
							}
							if (codi[0] === "input") {
									Object.assign(job, { 
										"value" : {
									"type" : "underfined",
									"value" : codi[2]
								},
								"varname" : codi[2]
							});
								}
								if (codi[0] === "clrscr") {
									 Object.assign(job, {
									 "function" : "clrscr",
										"value" : {
									"type" : "underfined",
									"value" : "th"
								}});
								}
								if(codi[0] === "range"){
									let dc;
									if (codi.length > 3) {
										for(let iai = 2; iai < codi.length; iai++){
											if (iai === 2) {
												dc = codi[iai];
											} else {
											dc = dc + " " + codi[iai];
										}
										}
									}
								let nvo = dc.split("-");
								//console.log(nvo);
								
									if (typeof nvo[0] !== "undefined" && typeof nvo[1] !== "undefined" && typeof nvo[2] !== "undefined") {
									let min = nvo[0].trim();
								//	console.log(min);
									let max = nvo[1].trim();
									let varn = nvo[2].trim();
									Object.assign(job, {
										"value" : {
									"type" : "underfined",
									"value" : "KAVO"
								},
								"min" : min,
								"max" : max,
								"varname" : varn
									});
						 }
						}
						if(codi[0] == "v&s"){
								//console.log("A");
								let dc;
									if (codi.length > 3) {
										for(let iai = 2; iai < codi.length; iai++){
											if (iai === 2) {
												dc = codi[iai];
											} else {
											dc = dc + " " + codi[iai];
										}
										}
									}
									//console.log("A");
							
							if (/\"(.*)\"/gim.test(dc)) {
								let all = dc.split("-");
								//	console.log(cval);
									if (typeof all[0] !== "undefined" && typeof all[1] !== "undefined") {
										let a = all[0], b = all[1];
										let c1 = true;
										let c = true;
										if (a.replace('"', "") !== a) {
											c = false;
										}
										if (b.replace('"', "") !== b) {
											c1 = false;
										}
									Object.assign(job, { 
										"value" : {
									"type" : "undefined",
									"value" : dc,

								},
								"slot1" : a.trim(),
									"slot2" : b.trim(),
									"slot1var" : c,
									"slot2var" : c1,

								});
									
								}
							}else{
								let all = dc.split("-");
								//	console.log(cval);
									if (typeof all[0] !== "undefined" && typeof all[1] !== "undefined") {
										let a = all[0], b = all[1];
										let c1 = true;
										let c = true;
										if (a.replace("'", "") !== a) {
											c = false;
										}
										if (b.replace("'", "") !== b) {
											c1 = false;
										}
									Object.assign(job, { 
										"value" : {
									"type" : "undefined",
									"value" : dc,

								},
								"slot1" : a.trim(),
									"slot2" : b.trim(),
									"slot1var" : true,
									"slot2var" : true
								});
									if(typeof all[2] !== "undefined"){
										Object.assign(job, {
											"otv" : all[2].trim()
										});
									}

								}
							} }
							lcode1.push(job);
							

								
							}
							lcode = lcode1.concat(lcode2);
						}
					break;
				}
				//if code
			//	if (true) {}
			//console.log(lcode);
			}


if (fname === "while" && inputin === true) {
				//console.log("WHILE");
				let fvar = lcode[i]["fvar"];
				let znak = lcode[i]["znak"];
				let svar = lcode[i]["svar"];
				let start = "{";
				let end = "}";
				let newline = ",";
				//let mcode = lcode[i]["spcode"];
				let ccide = valobj['value'].replace(fvar, '');
				ccide = ccide.replace(znak, '');
				ccide = ccide.replace(svar, '');
				ccide = ccide.replace(start, '');
				ccide = ccide.slice(0, -1);
				//console.log(valobj.value);
				if (ccide.slice(ccide.length-2) === '} ' && ccide.replace('{','').length === ccide.length) {
					//console.log(ccide);
				//ccide = ccide.slice(0, -2);
			}
			//console.log(ccide);
		//	console.log(ccide );
				
				ccide = ccide.trim();

				let mcode = ccide.split(/,(?![^{}]*\})/gm);
				for(let ae = 0;ae < mcode.length;ae++){
					//console.log(mcode[ae]);
					//console.log(mcode[ae].replace(/}/g,""));
					
					//console.log();
					

					if (mcode[ae].replace(/{/gim,"").length < mcode[ae].replace(/}/gim,"").length) {
						
					let mcode1 = mcode.slice(0,ae);
					let cc = mcode[ae];
					let cc2 = cc;
					// //console.log(mcode.slice(0,ae));
					//console.log(mcode.slice(ae+1));
					for(let aea = ae+1; aea < mcode.length;aea++){
					let cc12 = cc+mcode[aea].replace(/{/gim,"");
					let cc13 = cc+mcode[aea].replace(/}/gim,"");
				cc = cc+', '+mcode[aea];
//
						if (cc.replace(/{/gim,"").length < cc.replace(/}/gim,"").length) {
						//	console.log(cc);

						//	cc = cc+mcode[aea];
//
							//console.log(mcode[aea]);
//
							
						} else {
							//console.log(cc);
							//console.log(mcode.slice(aea+1));
							let mcode2 = mcode.slice(aea+1);
							mcode1.push(cc);
							
							//console.log(mcode1);
							mcode = mcode1.concat(mcode2);
							//console.log(mcode);
							//mcode = mcode2;
							//console.log(cc);
							break;
						}
					

					}
			

				} 

			}

				//console.log(ccide);

				for(let ae = 0;ae < mcode.length;ae++){
					mcode[ae] = mcode[ae].trim();
				}
				//console.log(mcode);
				//console.log(ccide);
				
				function isInteger(num) {
  return (num ^ 0) === num;
}

				//let test = fvar/1;

				//console.log(isInteger(Number(fvar)));
				if(fvar.split("[").length === 1 && svar.split("[").length === 1) {
				for(let y = 0; y<lcode.length; y++){
					if(typeof lcode[y]["vars"] !== "undefined") {
						let spliit = lcode[y]["vars"];
						let splut = spliit.split(" ");
						//console.log(lcode[y].vars) } }
						if(splut[0] === fvar && fvar.replace('"', "") == fvar) {
						
						
							
							//iv = spliit.replace(valobj.value+" ", '');
							
							if(typeof splut[1] !== "undefined"){
								fvar = splut[1];
								
					 } 

						} else if(splut[0] === svar && svar.replace('"', "") == svar) {
							
							if(typeof splut[1] !== "undefined"){
								svar = splut[1];
								
					 }

						}
					}				 
				} 
			    } else {
			    	if (fvar.split("[").length > 1) {
			    		for(let aS = 0; aS < lcode.length; aS++){
					if(typeof lcode[aS]["arrname"] !== "undefined") {
						
						
							
						let awi = fvar.split('[');
						//awi = awi.split('[');
						let spliit = lcode[aS]["arrname"];
						/*if (spliit === fvar && valobj.value.replace('arr.', '').replace("[", "") === valobj.value.replace('arr.', '')){
							lcode[aS]['arr']
						} else*/ if (spliit === awi[0]){
							let index = awi[1].replace("]","");
							let abi = lcode[aS]['arr'][index];
							if(typeof abi !== "undefined"){
						//	abi = abi.replace('"', "");
						//	abi = abi.replace('"', "");
						fvar = abi;
							//console.log(abi.replace('"', ""));
							
						} else {
							console.log("\x1b[33m[WARN]\x1b[37m index '" + index + "' empty.");
							fvar = "";
						}
						}
						}
				}
			    	}

			    	if (svar.split("[").length > 1) {
			    		for(let aS = 0; aS < lcode.length; aS++){
					if(typeof lcode[aS]["arrname"] !== "undefined") {
						
						
							
						let awi = svar.split('[');
						//awi = awi.split('[');
						let spliit = lcode[aS]["arrname"];
						/*if (spliit === fvar && valobj.value.replace('arr.', '').replace("[", "") === valobj.value.replace('arr.', '')){
							lcode[aS]['arr']
						} else*/ if (spliit === awi[0]){
							let index = awi[1].replace("]","");
							let abi = lcode[aS]['arr'][index];
							if(typeof abi !== "undefined"){
						//	abi = abi.replace('"', "");
						//	abi = abi.replace('"', "");
						svar = abi;
							//console.log(abi.replace('"', ""));
							
						} else {
							console.log("\x1b[33m[WARN]\x1b[37m index '" + index + "' empty.");
							svar = "";
						}
						}
						}
				}
			    	}
			    }
			//    console.log(fvar);
				fvar = fvar.replace(/['"]+/g, "")
				svar = svar.replace(/['"]+/g, "")

				
				//console.log(fvar);
				//console.log(svar);
				////console.log(znak);
				switch(znak) {
					case "=":
					if(Number(fvar)){
						fvar = Number(fvar);
						//console.log("net");
					}
					if(Number(svar)){
						svar = Number(svar);
					}
						if(fvar === svar) {
							
							let lcodet = lcode;
							let counter = i+1;
							let lcode1 = lcode.slice(0,i+1);
								let lcode2 = lcode.slice(i+1);
								let gs = 0;
								let indexemp = 0;
							
							for(let u = 0; u < mcode.length; u++) {

								let codi2 = mcode[u].split(/\s(?=(?:[^'"`]*(['"`])[^'"`]*\1)*[^'"`]*$)/gm);
								let job = {};
								let codi = [];
								//let text;
								for(let ii = 0;ii < codi2.length; ii++){
						if(codi2[ii] !== '"' && typeof codi2[ii] !== "undefined") {
							codi.push(codi2[ii]);
						}
					}
				
								//console.log(codi)
								//console.log(codi.length);
								if (codi[0] !== "if" && dict["function"][codi[0].toLowerCase()]) {
								Object.assign(job, { 
							"function":codi[0]
						});
								//console.log(mcode);
								if (/\"(.*)\"/gim.test(codi[2])) {
								
									//console.log(mcode);
									Object.assign(job, { 
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
									
								} else {
									Object.assign(job, { 
						"value" : {
							"type" : "var",
							"value" : codi[2]
						}});
								}
							} if(!dict["function"][fname.toLowerCase()]) {
								//console.log(codi);
							//	console.log();
								Object.assign(job, { 
									"unknown type" : codi[0],
									
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
							}

							 if(codi[0] == "if") {
								let ccd = [];
								let tet;

								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								//console.log(codi);
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
							//	console.log(tet);
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd
			});
								//console.log(job);
							}
							if(codi[0] == "while") {
								let ccd = [];
								let tet;
								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd

			});
							}


							 if(codi[0] == "for") {
								let ccd = [];
								let tet;
								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd

			});
							}
							if(codi[0] === "//") {
									Object.assign(job, { 
										"value" : {
									"type" : "underfined",
									"value" : "nth"
								}
								
							});
								}if(codi[0] === "var"){
								//console.log("ШОТО НЕ ТАКС");
								Object.assign(job, { 
									"function" : "var",
									"vars" : codi[2] + " ",
						"value" : {
							"type" : "undefined",
							"value" : ""
						}}); 
							} if(!dict["function"][codi[0].toLowerCase()]) {
								//console.log("here");
								Object.assign(job, { 
									
									"unknown type" : codi[0],
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
							}
							if (codi[0] === "input") {
									Object.assign(job, { 
										"value" : {
									"type" : "underfined",
									"value" : codi[2]
								},
								"varname" : codi[2]
							});
								}
								if (codi[0] === "clrscr") {
									 Object.assign(job, {
									 "function" : "clrscr",
										"value" : {
									"type" : "underfined",
									"value" : "th"
								}});
								}
								if(codi[0] === "range"){
									let dc;
									if (codi.length > 3) {
										for(let iai = 2; iai < codi.length; iai++){
											if (iai === 2) {
												dc = codi[iai];
											} else {
											dc = dc + " " + codi[iai];
										}
										}
									}
								let nvo = dc.split("-");
								//console.log(nvo);
								
									if (typeof nvo[0] !== "undefined" && typeof nvo[1] !== "undefined" && typeof nvo[2] !== "undefined") {
									let min = nvo[0].trim();
								//	console.log(min);
									let max = nvo[1].trim();
									let varn = nvo[2].trim();
									Object.assign(job, {
										"value" : {
									"type" : "underfined",
									"value" : "KAVO"
								},
								"min" : min,
								"max" : max,
								"varname" : varn
									});
						 }

						}
						/*if (codi[0] === "say" && codi[2].replace('arr.', '') !== codi[2]) {
							for(let aS = 0; aS < lcode.length; aS++){
					if(typeof lcode[aS]["arrname"] !== "undefined") {
						
						
							
						let awi = codi[2].replace('arr.', '');
						awi = awi.split('[');
						let spliit = lcode[aS]["arrname"];
						if (spliit === codi[2].replace('arr.', '') && codi[2].replace('arr.', '').replace("[", "") === codi[2].replace('arr.', '')){
							cf(lcode[aS]['arr']);
						} else if (spliit === awi[0]){
							let index = awi[1].replace("]","");
							let abi = lcode[aS]['arr'][index];
							if(typeof abi !== "undefined"){
							abi = abi.replace('"', "");
							abi = abi.replace('"', "");

							//console.log(abi.replace('"', ""));
							cf(abi);
						} else {
							console.log("\x1b[33m[WARN]\x1b[37m index '" + index + "' empty.");
						}
						}
						}
				}

						}*/
							if(codi[0] == "v&s"){
								//console.log("A");
								let dc;
									if (codi.length > 3) {
										for(let iai = 2; iai < codi.length; iai++){
											if (iai === 2) {
												dc = codi[iai];
											} else {
											dc = dc + " " + codi[iai];
										}
										}
									}
									//console.log("A");
							
							if (/\"(.*)\"/gim.test(dc)) {
								let all = dc.split("-");
								//	console.log(cval);
									if (typeof all[0] !== "undefined" && typeof all[1] !== "undefined") {
										let a = all[0], b = all[1];
										let c1 = true;
										let c = true;
										if (a.replace('"', "") !== a) {
											c = false;
										}
										if (b.replace('"', "") !== b) {
											c1 = false;
										}
									Object.assign(job, { 
										"value" : {
									"type" : "undefined",
									"value" : dc,

								},
								"slot1" : a.trim(),
									"slot2" : b.trim(),
									"slot1var" : c,
									"slot2var" : c1,

								});
									
								}
							}else{
								let all = dc.split("-");
								//	console.log(cval);
									if (typeof all[0] !== "undefined" && typeof all[1] !== "undefined") {
										let a = all[0], b = all[1];
										let c1 = true;
										let c = true;
										if (a.replace("'", "") !== a) {
											c = false;
										}
										if (b.replace("'", "") !== b) {
											c1 = false;
										}
									Object.assign(job, { 
										"value" : {
									"type" : "undefined",
									"value" : dc,

								},
								"slot1" : a.trim(),
									"slot2" : b.trim(),
									"slot1var" : true,
									"slot2var" : true
								});
									if(typeof all[2] !== "undefined"){
										Object.assign(job, {
											"otv" : all[2].trim()
										});
									}

								}
							} }

							lcode1.push(job);
							

								
							}
							lcode1.push(lcode[i]);
							lcode = lcode1.concat(lcode2);
							//console.log(lcode[i]);
							//console.log(lcode);
							
						}
					

											

					break;
					case "!=":
					if(Number(fvar)){
						fvar = Number(fvar);
					}
					if(Number(svar)){
						svar = Number(svar);
					}
						if(fvar !== svar) {
							let lcodet = lcode;
							let counter = i+1;
							let lcode1 = lcode.slice(0,i+1);
								let lcode2 = lcode.slice(i+1);
								let gs = 0;
								let indexemp = 0;
							
							for(let u = 0; u < mcode.length; u++) {

								let codi2 = mcode[u].split(/\s(?=(?:[^'"`]*(['"`])[^'"`]*\1)*[^'"`]*$)/gm);
								let job = {};
								let codi = [];
								//let text;
								for(let ii = 0;ii < codi2.length; ii++){
						if(codi2[ii] !== '"' && typeof codi2[ii] !== "undefined") {
							codi.push(codi2[ii]);
						}
					}
				
								//console.log(codi)
								//console.log(codi.length);
								if (codi[0] !== "if" && dict["function"][codi[0].toLowerCase()]) {
								Object.assign(job, { 
							"function":codi[0]
						});
								//console.log(mcode);
								if (/\"(.*)\"/gim.test(codi[2])) {
								
									//console.log(mcode);
									Object.assign(job, { 
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
									
								} else {
									Object.assign(job, { 
						"value" : {
							"type" : "var",
							"value" : codi[2]
						}});
								}
							} if(!dict["function"][fname.toLowerCase()]) {
								//console.log(codi);
								Object.assign(job, { 
									"unknown type" : codi[0],
									
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
							}

							 if(codi[0] == "if") {
								let ccd = [];
								let tet;
								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd

			});
							}
							if(codi[0] == "while") {
								let ccd = [];
								let tet;
								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd

			});
							}
							 if(codi[0] == "for") {
								let ccd = [];
								let tet;
								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd

			});
							}
							if(codi[0] === "//") {
									Object.assign(job, { 
										"value" : {
									"type" : "underfined",
									"value" : "nth"
								}
								
							});
								}if(codi[0] === "var"){
								//console.log("ШОТО НЕ ТАКС");
								Object.assign(job, { 
									"function" : "var",
									"vars" : codi[2] + " ",
						"value" : {
							"type" : "undefined",
							"value" : ""
						}}); 
							} if(!dict["function"][codi[0].toLowerCase()]) {
								Object.assign(job, { 
									
									"unknown type" : codi[0],
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
							}
							if (codi[0] === "input") {
									Object.assign(job, { 
										"value" : {
									"type" : "underfined",
									"value" : codi[2]
								},
								"varname" : codi[2]
							});
								}
								if (codi[0] === "clrscr") {
									 Object.assign(job, {
									 "function" : "clrscr",
										"value" : {
									"type" : "underfined",
									"value" : "th"
								}});
								}
								if(codi[0] === "range"){
									let dc;
									if (codi.length > 3) {
										for(let iai = 2; iai < codi.length; iai++){
											if (iai === 2) {
												dc = codi[iai];
											} else {
											dc = dc + " " + codi[iai];
										}
										}
									}
								let nvo = dc.split("-");
								//console.log(nvo);
								
									if (typeof nvo[0] !== "undefined" && typeof nvo[1] !== "undefined" && typeof nvo[2] !== "undefined") {
									let min = nvo[0].trim();
								//	console.log(min);
									let max = nvo[1].trim();
									let varn = nvo[2].trim();
									Object.assign(job, {
										"value" : {
									"type" : "underfined",
									"value" : "KAVO"
								},
								"min" : min,
								"max" : max,
								"varname" : varn
									});
						 }
						}
						if(codi[0] == "v&s"){
								//console.log("A");
								let dc;
									if (codi.length > 3) {
										for(let iai = 2; iai < codi.length; iai++){
											if (iai === 2) {
												dc = codi[iai];
											} else {
											dc = dc + " " + codi[iai];
										}
										}
									}
									//console.log("A");
							
							if (/\"(.*)\"/gim.test(dc)) {
								let all = dc.split("-");
								//	console.log(cval);
									if (typeof all[0] !== "undefined" && typeof all[1] !== "undefined") {
										let a = all[0], b = all[1];
										let c1 = true;
										let c = true;
										if (a.replace('"', "") !== a) {
											c = false;
										}
										if (b.replace('"', "") !== b) {
											c1 = false;
										}
									Object.assign(job, { 
										"value" : {
									"type" : "undefined",
									"value" : dc,

								},
								"slot1" : a.trim(),
									"slot2" : b.trim(),
									"slot1var" : c,
									"slot2var" : c1,

								});
									
								}
							}else{
								let all = dc.split("-");
								//	console.log(cval);
									if (typeof all[0] !== "undefined" && typeof all[1] !== "undefined") {
										let a = all[0], b = all[1];
										let c1 = true;
										let c = true;
										if (a.replace("'", "") !== a) {
											c = false;
										}
										if (b.replace("'", "") !== b) {
											c1 = false;
										}
									Object.assign(job, { 
										"value" : {
									"type" : "undefined",
									"value" : dc,

								},
								"slot1" : a.trim(),
									"slot2" : b.trim(),
									"slot1var" : true,
									"slot2var" : true
								});
									if(typeof all[2] !== "undefined"){
										Object.assign(job, {
											"otv" : all[2].trim()
										});
									}

								}
							} }

							lcode1.push(job);
							

								
							}
							lcode1.push(lcode[i]);
							lcode = lcode1.concat(lcode2);
						}
					break;
					case ">":
					if(Number(fvar)){
						fvar = Number(fvar);
					}
					if(Number(svar)){
						svar = Number(svar);
					}
						if(fvar > svar) {
							let lcodet = lcode;
							let counter = i+1;
							let lcode1 = lcode.slice(0,i+1);
								let lcode2 = lcode.slice(i+1);
								let gs = 0;
								let indexemp = 0;
							
							for(let u = 0; u < mcode.length; u++) {

								let codi2 = mcode[u].split(/\s(?=(?:[^'"`]*(['"`])[^'"`]*\1)*[^'"`]*$)/gm);
								let job = {};
								let codi = [];
								//let text;
								for(let ii = 0;ii < codi2.length; ii++){
						if(codi2[ii] !== '"' && typeof codi2[ii] !== "undefined") {
							codi.push(codi2[ii]);
						}
					}
				
								//console.log(codi)
								//console.log(codi.length);
								if (codi[0] !== "if" && dict["function"][codi[0].toLowerCase()]) {
								Object.assign(job, { 
							"function":codi[0]
						});
								//console.log(mcode);
								if (/\"(.*)\"/gim.test(codi[2])) {
								
									//console.log(mcode);
									Object.assign(job, { 
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
									
								} else {
									Object.assign(job, { 
						"value" : {
							"type" : "var",
							"value" : codi[2]
						}});
								}
							} if(!dict["function"][fname.toLowerCase()]) {
								//console.log(codi);
								Object.assign(job, { 
									"unknown type" : codi[0],
									
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
							}

							 if(codi[0] == "if") {
								let ccd = [];
								let tet;
								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd

			});
							}
							if(codi[0] == "while") {
								let ccd = [];
								let tet;
								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd

			});
							} if(codi[0] == "for") {
								let ccd = [];
								let tet;
								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd

			});
							}
							if(codi[0] === "//") {
									Object.assign(job, { 
										"value" : {
									"type" : "underfined",
									"value" : "nth"
								}
								
							});
								}if(codi[0] === "var"){
								//console.log("ШОТО НЕ ТАКС");
								Object.assign(job, { 
									"function" : "var",
									"vars" : codi[2] + " ",
						"value" : {
							"type" : "undefined",
							"value" : ""
						}}); 
							} if(!dict["function"][codi[0].toLowerCase()]) {
								Object.assign(job, { 
									
									"unknown type" : codi[0],
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
							}
							if (codi[0] === "input") {
									Object.assign(job, { 
										"value" : {
									"type" : "underfined",
									"value" : codi[2]
								},
								"varname" : codi[2]
							});
								}
								if (codi[0] === "clrscr") {
									 Object.assign(job, {
									 "function" : "clrscr",
										"value" : {
									"type" : "underfined",
									"value" : "th"
								}});
								}
								if(codi[0] === "range"){
									let dc;
									if (codi.length > 3) {
										for(let iai = 2; iai < codi.length; iai++){
											if (iai === 2) {
												dc = codi[iai];
											} else {
											dc = dc + " " + codi[iai];
										}
										}
									}
								let nvo = dc.split("-");
							//	console.log(nvo);
								
									if (typeof nvo[0] !== "undefined" && typeof nvo[1] !== "undefined" && typeof nvo[2] !== "undefined") {
									let min = nvo[0].trim();
								//	console.log(min);
									let max = nvo[1].trim();
									let varn = nvo[2].trim();
									Object.assign(job, {
										"value" : {
									"type" : "underfined",
									"value" : "KAVO"
								},
								"min" : min,
								"max" : max,
								"varname" : varn
									});
						 }
						}
						if(codi[0] == "v&s"){
								//console.log("A");
								let dc;
									if (codi.length > 3) {
										for(let iai = 2; iai < codi.length; iai++){
											if (iai === 2) {
												dc = codi[iai];
											} else {
											dc = dc + " " + codi[iai];
										}
										}
									}
									//console.log("A");
							
							if (/\"(.*)\"/gim.test(dc)) {
								let all = dc.split("-");
								//	console.log(cval);
									if (typeof all[0] !== "undefined" && typeof all[1] !== "undefined") {
										let a = all[0], b = all[1];
										let c1 = true;
										let c = true;
										if (a.replace('"', "") !== a) {
											c = false;
										}
										if (b.replace('"', "") !== b) {
											c1 = false;
										}
									Object.assign(job, { 
										"value" : {
									"type" : "undefined",
									"value" : dc,

								},
								"slot1" : a.trim(),
									"slot2" : b.trim(),
									"slot1var" : c,
									"slot2var" : c1,

								});
									
								}
							}else{
								let all = dc.split("-");
								//	console.log(cval);
									if (typeof all[0] !== "undefined" && typeof all[1] !== "undefined") {
										let a = all[0], b = all[1];
										let c1 = true;
										let c = true;
										if (a.replace("'", "") !== a) {
											c = false;
										}
										if (b.replace("'", "") !== b) {
											c1 = false;
										}
									Object.assign(job, { 
										"value" : {
									"type" : "undefined",
									"value" : dc,

								},
								"slot1" : a.trim(),
									"slot2" : b.trim(),
									"slot1var" : true,
									"slot2var" : true
								});
									if(typeof all[2] !== "undefined"){
										Object.assign(job, {
											"otv" : all[2].trim()
										});
									}

								}
							} }

							lcode1.push(job);
							

								
							}
							lcode1.push(lcode[i]);
							lcode = lcode1.concat(lcode2);
						}
					break;
					case "<":
					if(Number(fvar)){
						fvar = Number(fvar);
					}
					if(Number(svar)){
						svar = Number(svar);
					}
						if(fvar < svar) {
							let lcodet = lcode;
							let counter = i+1;
							let lcode1 = lcode.slice(0,i+1);
								let lcode2 = lcode.slice(i+1);
								let gs = 0;
								let indexemp = 0;
							
							for(let u = 0; u < mcode.length; u++) {

								let codi2 = mcode[u].split(/\s(?=(?:[^'"`]*(['"`])[^'"`]*\1)*[^'"`]*$)/gm);
								let job = {};
								let codi = [];
								//let text;
								for(let ii = 0;ii < codi2.length; ii++){
						if(codi2[ii] !== '"' && typeof codi2[ii] !== "undefined") {
							codi.push(codi2[ii]);
						}
					}
				
								//console.log(codi)
								//console.log(codi.length);
								if (codi[0] !== "if" && dict["function"][codi[0].toLowerCase()]) {
								Object.assign(job, { 
							"function":codi[0]
						});
								//console.log(mcode);
								if (/\"(.*)\"/gim.test(codi[2])) {
								
									//console.log(mcode);
									Object.assign(job, { 
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
									
								} else {
									Object.assign(job, { 
						"value" : {
							"type" : "var",
							"value" : codi[2]
						}});
								}
							} if(!dict["function"][fname.toLowerCase()]) {
							//	console.log(codi);
								Object.assign(job, { 
									"unknown type" : codi[0],
									
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
							}

							 if(codi[0] == "if") {
								let ccd = [];
								let tet;
								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd

			});
							}
							if(codi[0] == "while") {
								let ccd = [];
								let tet;
								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd

			});
							} if(codi[0] == "for") {
								let ccd = [];
								let tet;
								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd

			});
							}
							if(codi[0] === "//") {
									Object.assign(job, { 
										"value" : {
									"type" : "underfined",
									"value" : "nth"
								}
								
							});
								}if(codi[0] === "var" ){
								//console.log("ШОТО НЕ ТАКС");
								Object.assign(job, { 
									"function" : "var",
									"vars" : codi[2] + " ",
						"value" : {
							"type" : "undefined",
							"value" : ""
						}}); 
							} if(!dict["function"][codi[0].toLowerCase()]) {
								Object.assign(job, { 
									
									"unknown type" : codi[0],
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
							}
							if (codi[0] === "input") {
									Object.assign(job, { 
										"value" : {
									"type" : "underfined",
									"value" : codi[2]
								},
								"varname" : codi[2]
							});
								}
								if (codi[0] === "clrscr") {
									 Object.assign(job, {
									 "function" : "clrscr",
										"value" : {
									"type" : "underfined",
									"value" : "th"
								}});
								}
								if(codi[0] === "range"){
									let dc;
									if (codi.length > 3) {
										for(let iai = 2; iai < codi.length; iai++){
											if (iai === 2) {
												dc = codi[iai];
											} else {
											dc = dc + " " + codi[iai];
										}
										}
									}
								let nvo = dc.split("-");
								//console.log(nvo);
								
									if (typeof nvo[0] !== "undefined" && typeof nvo[1] !== "undefined" && typeof nvo[2] !== "undefined") {
									let min = nvo[0].trim();
								//	console.log(min);
									let max = nvo[1].trim();
									let varn = nvo[2].trim();
									Object.assign(job, {
										"value" : {
									"type" : "underfined",
									"value" : "KAVO"
								},
								"min" : min,
								"max" : max,
								"varname" : varn
									});
						 }
						}
						if(codi[0] == "v&s"){
								//console.log("A");
								let dc;
									if (codi.length > 3) {
										for(let iai = 2; iai < codi.length; iai++){
											if (iai === 2) {
												dc = codi[iai];
											} else {
											dc = dc + " " + codi[iai];
										}
										}
									}
									//console.log("A");
							
							if (/\"(.*)\"/gim.test(dc)) {
								let all = dc.split("-");
								//	console.log(cval);
									if (typeof all[0] !== "undefined" && typeof all[1] !== "undefined") {
										let a = all[0], b = all[1];
										let c1 = true;
										let c = true;
										if (a.replace('"', "") !== a) {
											c = false;
										}
										if (b.replace('"', "") !== b) {
											c1 = false;
										}
									Object.assign(job, { 
										"value" : {
									"type" : "undefined",
									"value" : dc,

								},
								"slot1" : a.trim(),
									"slot2" : b.trim(),
									"slot1var" : c,
									"slot2var" : c1,

								});
									
								}
							}else{
								let all = dc.split("-");
								//	console.log(cval);
									if (typeof all[0] !== "undefined" && typeof all[1] !== "undefined") {
										let a = all[0], b = all[1];
										let c1 = true;
										let c = true;
										if (a.replace("'", "") !== a) {
											c = false;
										}
										if (b.replace("'", "") !== b) {
											c1 = false;
										}
									Object.assign(job, { 
										"value" : {
									"type" : "undefined",
									"value" : dc,

								},
								"slot1" : a.trim(),
									"slot2" : b.trim(),
									"slot1var" : true,
									"slot2var" : true
								});
									if(typeof all[2] !== "undefined"){
										Object.assign(job, {
											"otv" : all[2].trim()
										});
									}

								}
							} }
							lcode1.push(job);
							

								
							}
							lcode1.push(lcode[i]);
							lcode = lcode1.concat(lcode2);
						}
					break;
				}
				//while code
			//	if (true) {}
			}


						if (fname === "for" && inputin === true) {

				let fvar = lcode[i]["fvar"];
				let znak = lcode[i]["znak"];
				let svar = lcode[i]["svar"];
				let start = "{";
				let end = "}";
				let newline = ",";
				let outputVar = "";
				let svarcl;
				//let mcode = lcode[i]["spcode"];

				let ccide = valobj['value'].replace(fvar, '');
				ccide = ccide.replace(znak, '');
				ccide = ccide.replace(svar, '');
				ccide = ccide.replace(start, '');
				//console.log(valobj['value']);
				ccide = ccide.slice(0, -1);
				if (ccide.slice(ccide.length-2) === '} ' && ccide.replace('{','').length === ccide.length) {
				ccide = ccide.slice(0, -2);
			}
			//console.log(ccide.slice(0, -1) );
				
				ccide = ccide.trim();
				let mcode = ccide.split(/,(?![^{}]*\})/gim);
					for(let ae = 0;ae < mcode.length;ae++){

					//console.log(mcode[ae]);
					//console.log(mcode[ae].replace(/}/g,""));
					
					//console.log();
					

					if (mcode[ae].replace(/{/gim,"").length < mcode[ae].replace(/}/gim,"").length) {
						
					let mcode1 = mcode.slice(0,ae);
					let cc = mcode[ae];
					let cc2 = cc;
					// //console.log(mcode.slice(0,ae));
					//console.log(mcode.slice(ae+1));
					for(let aea = ae+1; aea < mcode.length;aea++){
					let cc12 = cc+mcode[aea].replace(/{/gim,"");
					let cc13 = cc+mcode[aea].replace(/}/gim,"");
				cc = cc+', '+mcode[aea];
//
						if (cc.replace(/{/gim,"").length < cc.replace(/}/gim,"").length) {
						//	console.log(cc);

						//	cc = cc+mcode[aea];
//
							//console.log(mcode[aea]);
//
							
						} else {
							//console.log(cc);
							//console.log(mcode.slice(aea+1));
							let mcode2 = mcode.slice(aea+1);
							mcode1.push(cc);
							
							//console.log(mcode1);
							mcode = mcode1.concat(mcode2);
							//console.log(mcode);
							//mcode = mcode2;
							//console.log(cc);
							break;
						}
					

					}
			

				} 

			}
				//console.log(mcode);
				//console.log();
				//console.log();
				//console.log();console.log();console.log();console.log();console.log();console.log();console.log();console.log();
				for(let ae = 0;ae < mcode.length;ae++){
					mcode[ae] = mcode[ae].trim();
				}
				//console.log(ccide);
				
				function isInteger(num) {
  return (num ^ 0) === num;
}

				//let test = fvar/1;

				//console.log(isInteger(Number(fvar)));
				if(fvar.split("[").length === 1 && svar.split("[").length === 1) {
				for(let y = 0; y<lcode.length; y++){
					if(typeof lcode[y]["vars"] !== "undefined") {
						let spliit = lcode[y]["vars"];
						let splut = spliit.split(" ");
						//console.log(lcode[y].vars) } }
						if(splut[0] === fvar && fvar.replace('"', "") == fvar) {
						
						
							
							//iv = spliit.replace(valobj.value+" ", '');
							
							if(typeof splut[1] !== "undefined"){
								outputVar = fvar;
								fvar = splut[1];

								
					 } 

						} else if(splut[0] === svar && svar.replace('"', "") == svar) {
							
							if(typeof splut[1] !== "undefined"){
								svarcl = svar;
								svar = splut[1];
								
					 }

						}
					}				 
				} 
			    } else {
			    	if (fvar.split("[").length > 1) {
			    		for(let aS = 0; aS < lcode.length; aS++){
					if(typeof lcode[aS]["arrname"] !== "undefined") {
						
						
							
						let awi = fvar.split('[');
						//awi = awi.split('[');
						let spliit = lcode[aS]["arrname"];
						/*if (spliit === fvar && valobj.value.replace('arr.', '').replace("[", "") === valobj.value.replace('arr.', '')){
							lcode[aS]['arr']
						} else*/ if (spliit === awi[0]){
							let index = awi[1].replace("]","");
							let abi = lcode[aS]['arr'][index];
							if(typeof abi !== "undefined"){
						//	abi = abi.replace('"', "");
						//	abi = abi.replace('"', "");
						fvar = abi;
							//console.log(abi.replace('"', ""));
							
						} else {
							console.log("\x1b[33m[WARN]\x1b[37m index '" + index + "' empty.");
							fvar = "";
						}
						}
						}
				}
			    	}

			    	if (svar.split("[").length > 1) {
			    		for(let aS = 0; aS < lcode.length; aS++){
					if(typeof lcode[aS]["arrname"] !== "undefined") {
						
						
							
						let awi = svar.split('[');
						//awi = awi.split('[');
						let spliit = lcode[aS]["arrname"];
						/*if (spliit === fvar && valobj.value.replace('arr.', '').replace("[", "") === valobj.value.replace('arr.', '')){
							lcode[aS]['arr']
						} else*/ if (spliit === awi[0]){
							let index = awi[1].replace("]","");
							let abi = lcode[aS]['arr'][index];
							if(typeof abi !== "undefined"){
						//	abi = abi.replace('"', "");
						//	abi = abi.replace('"', "");
						svar = abi;
							//console.log(abi.replace('"', ""));
							
						} else {
							console.log("\x1b[33m[WARN]\x1b[37m index '" + index + "' empty.");
							svar = "";
						}
						}
						}
				}
			    	}
			    }
			//    console.log(fvar);
				fvar = fvar.replace(/['"]+/g, "")
				svar = svar.replace(/['"]+/g, "")

				
				//console.log(fvar);
				//console.log(svar);
				////console.log(znak);
				if (Number(fvar+1) && Number(svar+1)) {
				switch(znak) {
					
					case ">":
					if(Number(fvar+1)){
						fvar = Number(fvar);
					}
					if(Number(svar+1)){
						svar = Number(svar);
					}
						if(fvar > svar) {
							let lcodet = lcode;
							let counter = i+1;
							let lcode1 = lcode.slice(0,i+1);
								let lcode2 = lcode.slice(i+1);
								let gs = 0;
								let indexemp = 0;
								
							for(let u = 0; u < mcode.length; u++) {

								let codi2 = mcode[u].split(/\s(?=(?:[^'"`]*(['"`])[^'"`]*\1)*[^'"`]*$)/gm);

								let job = {};
								let codi = [];
								//let text;
								for(let ii = 0;ii < codi2.length; ii++){
						if(codi2[ii] !== '"' && typeof codi2[ii] !== "undefined") {
							codi.push(codi2[ii]);
						}
					}
							Object.assign(job, { 
									
									"unknown type" : svarcl,
						"value" : {
							"type" : "string",
							"value" : '"' + svar + '"'
						}});
				
								//console.log(codi)
								//console.log(codi.length);
								if (codi[0] !== "if" && dict["function"][codi[0].toLowerCase()]) {
								Object.assign(job, { 
							"function":codi[0]
						});
								//console.log(mcode);
								if (/\"(.*)\"/gim.test(codi[2])) {
								
									//console.log(mcode);
									Object.assign(job, { 
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
									
								} else {
									Object.assign(job, { 
						"value" : {
							"type" : "var",
							"value" : codi[2]
						}});
								}
							} if(!dict["function"][fname.toLowerCase()]) {
							//	console.log(codi);
								Object.assign(job, { 
									"unknown type" : codi[0],
									
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
							}

							 if(codi[0] == "if") {
								let ccd = [];
								let tet;
								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd

			});
							}
							if(codi[0] == "while") {
								let ccd = [];
								let tet;
								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd

			});

							}
								if(codi[0] === "//") {
									Object.assign(job, { 
										"value" : {
									"type" : "underfined",
									"value" : "nth"
								}
								
							});
								}
							 
							 if(codi[0] == "for") {
								let ccd = [];
								let tet;
								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd

			});
							}
							if(codi[0] === "//") {
									Object.assign(job, { 
										"value" : {
									"type" : "underfined",
									"value" : "nth"
								}
								
							});
								}if(codi[0] === "var"){
								//console.log("ШОТО НЕ ТАКС");
								Object.assign(job, { 
									"function" : "var",
									"vars" : codi[2] + " ",
						"value" : {
							"type" : "undefined",
							"value" : ""
						}}); 
							} if(!dict["function"][codi[0].toLowerCase()]) {
								Object.assign(job, { 
									
									"unknown type" : codi[0],
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
							}
							if (codi[0] === "input") {
									Object.assign(job, { 
										"value" : {
									"type" : "underfined",
									"value" : codi[2]
								},
								"varname" : codi[2]
							});
								}
								if (codi[0] === "clrscr") {
									 Object.assign(job, {
									 "function" : "clrscr",
										"value" : {
									"type" : "underfined",
									"value" : "th"
								}});
								}
								if(codi[0] === "range"){
									let dc;
									if (codi.length > 3) {
										for(let iai = 2; iai < codi.length; iai++){
											if (iai === 2) {
												dc = codi[iai];
											} else {
											dc = dc + " " + codi[iai];
										}
										}
									}
								let nvo = dc.split("-");
							//	console.log(nvo);
								
									if (typeof nvo[0] !== "undefined" && typeof nvo[1] !== "undefined" && typeof nvo[2] !== "undefined") {
									let min = nvo[0].trim();
								//	console.log(min);
									let max = nvo[1].trim();
									let varn = nvo[2].trim();
									Object.assign(job, {
										"value" : {
									"type" : "underfined",
									"value" : "KAVO"
								},
								"min" : min,
								"max" : max,
								"varname" : varn
									});
						 }
						}
						if(codi[0] == "v&s"){
								//console.log("A");
								let dc;
									if (codi.length > 3) {
										for(let iai = 2; iai < codi.length; iai++){
											if (iai === 2) {
												dc = codi[iai];
											} else {
											dc = dc + " " + codi[iai];
										}
										}
									}
									//console.log("A");
							
							if (/\"(.*)\"/gim.test(dc)) {
								let all = dc.split("-");
								//	console.log(cval);
									if (typeof all[0] !== "undefined" && typeof all[1] !== "undefined") {
										let a = all[0], b = all[1];
										let c1 = true;
										let c = true;
										if (a.replace('"', "") !== a) {
											c = false;
										}
										if (b.replace('"', "") !== b) {
											c1 = false;
										}
									Object.assign(job, { 
										"value" : {
									"type" : "undefined",
									"value" : dc,

								},
								"slot1" : a.trim(),
									"slot2" : b.trim(),
									"slot1var" : c,
									"slot2var" : c1,

								});
									
								}
							}else{
								let all = dc.split("-");
								//	console.log(cval);
									if (typeof all[0] !== "undefined" && typeof all[1] !== "undefined") {
										let a = all[0], b = all[1];
										let c1 = true;
										let c = true;
										if (a.replace("'", "") !== a) {
											c = false;
										}
										if (b.replace("'", "") !== b) {
											c1 = false;
										}
									Object.assign(job, { 
										"value" : {
									"type" : "undefined",
									"value" : dc,

								},
								"slot1" : a.trim(),
									"slot2" : b.trim(),
									"slot1var" : true,
									"slot2var" : true
								});
									if(typeof all[2] !== "undefined"){
										Object.assign(job, {
											"otv" : all[2].trim()
										});
									}

								}
							} }

							lcode1.push(job);
							

								
							}
							if (outputVar !== "") {
								let job = {};
								let assss = fvar - 1;
								assss = String(assss);
								Object.assign(job, { 
									
									"unknown type" : outputVar,
						"value" : {
							"type" : "string",
							"value" : '"' + assss + '"'
						}});
								lcode1.push(job);
								let lcodecs = lcode[i];

								lcode1.push(lcodecs);
								lcode = lcode1.concat(lcode2);
							} else {
								console.log("\x1b[31m[CAUTION]\x1b[37m First arg should be VAR or ARRAYBYINDEX.");
							}
							
							//console.log(lcode);
						}
					break;
					case "<":
					if(Number(fvar+1)){
						fvar = Number(fvar);
					}
					if(Number(svar+1)){
						svar = Number(svar);
					}
						if(fvar < svar) {
							let lcodet = lcode;
							let counter = i+1;
							let lcode1 = lcode.slice(0,i+1);
								let lcode2 = lcode.slice(i+1);
								let gs = 0;
								let indexemp = 0;
								
							for(let u = 0; u < mcode.length; u++) {

								let codi2 = mcode[u].split(/\s(?=(?:[^'"`]*(['"`])[^'"`]*\1)*[^'"`]*$)/gm);

								let job = {};
								let codi = [];
								//let text;
								for(let ii = 0;ii < codi2.length; ii++){
						if(codi2[ii] !== '"' && typeof codi2[ii] !== "undefined") {
							codi.push(codi2[ii]);
						}
					}
							Object.assign(job, { 
									
									"unknown type" : svarcl,
						"value" : {
							"type" : "string",
							"value" : '"' + svar + '"'
						}});
				
								//console.log(codi)
								//console.log(codi.length);
								if (codi[0] !== "if" && dict["function"][codi[0].toLowerCase()]) {
								Object.assign(job, { 
							"function":codi[0]
						});
								//console.log(mcode);
								if (/\"(.*)\"/gim.test(codi[2])) {
								
									//console.log(mcode);
									Object.assign(job, { 
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
									
								} else {
									Object.assign(job, { 
						"value" : {
							"type" : "var",
							"value" : codi[2]
						}});
								}
							} if(!dict["function"][fname.toLowerCase()]) {
							//	console.log(codi);
								Object.assign(job, { 
									"unknown type" : codi[0],
									
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
							}

							 if(codi[0] == "if") {
								let ccd = [];
								let tet;
								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd

			});
							}
							if(codi[0] == "while") {
								let ccd = [];
								let tet;
								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd

			});

							}
								if(codi[0] === "//") {
									Object.assign(job, { 
										"value" : {
									"type" : "underfined",
									"value" : "nth"
								}
								
							});
								}
							 
							 if(codi[0] == "for") {
								let ccd = [];
								let tet;
								for(var ac = 2; ac < codi.length;ac++){
									ccd.push(codi[ac]);
									//console.log();
								}
								for(var aac = 0; aac < ccd.length; aac++){
									if(aac === 0) {
										tet = ccd[aac];
									} else {
										tet = tet + " " + ccd[aac];
									}
								}
								Object.assign(job, { 
							"function":codi[0]
						});
								Object.assign(job, {
									"value" : {
										"type" : "string",
										"value" : tet
									}
								});
							//console.log(ccd);
								Object.assign(job, {
									

				"fvar" : codi[2],
				"znak" : codi[3],
				"svar" : codi[4],
				//"start" : pzd[3],
				"code" : tet,
				"spcode" : ccd

			});
							}
							if(codi[0] === "//") {
									Object.assign(job, { 
										"value" : {
									"type" : "underfined",
									"value" : "nth"
								}
								
							});
								}if(codi[0] === "var"){
								//console.log("ШОТО НЕ ТАКС");
								Object.assign(job, { 
									"function" : "var",
									"vars" : codi[2] + " ",
						"value" : {
							"type" : "undefined",
							"value" : ""
						}}); 
							} if(!dict["function"][codi[0].toLowerCase()]) {
								Object.assign(job, { 
									
									"unknown type" : codi[0],
						"value" : {
							"type" : "string",
							"value" : codi[2]
						}}); 
							}
							if (codi[0] === "input") {
									Object.assign(job, { 
										"value" : {
									"type" : "underfined",
									"value" : codi[2]
								},
								"varname" : codi[2]
							});
								}
								if (codi[0] === "clrscr") {
									 Object.assign(job, {
									 "function" : "clrscr",
										"value" : {
									"type" : "underfined",
									"value" : "th"
								}});
								}
								if(codi[0] === "range"){
									let dc;
									if (codi.length > 3) {
										for(let iai = 2; iai < codi.length; iai++){
											if (iai === 2) {
												dc = codi[iai];
											} else {
											dc = dc + " " + codi[iai];
										}
										}
									}
								let nvo = dc.split("-");
							//	console.log(nvo);
								
									if (typeof nvo[0] !== "undefined" && typeof nvo[1] !== "undefined" && typeof nvo[2] !== "undefined") {
									let min = nvo[0].trim();
								//	console.log(min);
									let max = nvo[1].trim();
									let varn = nvo[2].trim();
									Object.assign(job, {
										"value" : {
									"type" : "underfined",
									"value" : "KAVO"
								},
								"min" : min,
								"max" : max,
								"varname" : varn
									});
						 }
						}
						if(codi[0] == "v&s"){
								//console.log("A");
								let dc;
									if (codi.length > 3) {
										for(let iai = 2; iai < codi.length; iai++){
											if (iai === 2) {
												dc = codi[iai];
											} else {
											dc = dc + " " + codi[iai];
										}
										}
									}
									//console.log("A");
							
							if (/\"(.*)\"/gim.test(dc)) {
								let all = dc.split("-");
								//	console.log(cval);
									if (typeof all[0] !== "undefined" && typeof all[1] !== "undefined") {
										let a = all[0], b = all[1];
										let c1 = true;
										let c = true;
										if (a.replace('"', "") !== a) {
											c = false;
										}
										if (b.replace('"', "") !== b) {
											c1 = false;
										}
									Object.assign(job, { 
										"value" : {
									"type" : "undefined",
									"value" : dc,

								},
								"slot1" : a.trim(),
									"slot2" : b.trim(),
									"slot1var" : c,
									"slot2var" : c1,

								});
									
								}
							}else{
								let all = dc.split("-");
								//	console.log(cval);
									if (typeof all[0] !== "undefined" && typeof all[1] !== "undefined") {
										let a = all[0], b = all[1];
										let c1 = true;
										let c = true;
										if (a.replace("'", "") !== a) {
											c = false;
										}
										if (b.replace("'", "") !== b) {
											c1 = false;
										}
									Object.assign(job, { 
										"value" : {
									"type" : "undefined",
									"value" : dc,

								},
								"slot1" : a.trim(),
									"slot2" : b.trim(),
									"slot1var" : true,
									"slot2var" : true
								});
									if(typeof all[2] !== "undefined"){
										Object.assign(job, {
											"otv" : all[2].trim()
										});
									}

								}
							} }

							lcode1.push(job);
							

								
							}
							if (outputVar !== "") {
								let job = {};
								let assss = fvar + 1;
								assss = String(assss);
								Object.assign(job, { 
									
									"unknown type" : outputVar,
						"value" : {
							"type" : "string",
							"value" : '"' + assss + '"'
						}});
								lcode1.push(job);
								let lcodecs = lcode[i];

								lcode1.push(lcodecs);
								lcode = lcode1.concat(lcode2);
							} else {
								console.log("\x1b[31m[CAUTION]\x1b[37m First arg should be VAR or ARRAYBYINDEX.");
							}
							
							//console.log(lcode);
						}
					break;
				}
				//for code
			//	if (true) {}
			
 } /*if (!Number(fvar) && !Number(svar))*/ else  {
 	console.log("\x1b[31m[CAUTION]\x1b[37m 'for' has skipped by error's in arg's.");
 	//console.log(lcode);
 	//console.log(Number(fvar));
 	//console.log(Number(svar));

 }
 }






















			

				

						
			
		} else {
				let checked = 0;
				let arrCheck = fname.split("[");
				//console.log(arrCheck[1].replace("]", ""));
				//array
if (arrCheck.length > 1) {
	//console.log("test");
				for(let y = 0; y<lcode.length; y++){
					if(typeof lcode[y]["arrname"] !== "undefined") {
						let spliit = lcode[y]["arrname"];
						//console.log("test2");
						//console.log(lcode[y].vars) } }
						//let splut = spliit.split(" ");
						if (spliit == arrCheck[0]){
							//console.log("TEST3");
							let ai = arrCheck[1].replace("]", "");
							//console.log(ai);
							if(Number(ai)+1){
								let index = Number(ai);
								if(valobj['value'].replace('"', '') !== valobj.value) {
									let carr = lcode[y]["arr"];
									carr[index] = valobj.value;
								} 
								if(valobj['value'].replace('"', '') === valobj.value) {

									let splut;
									for(let yz = 0; yz<lcode.length; yz++){
					if(typeof lcode[yz]["vars"] !== "undefined") {
						//console.log("HERE OK");
						let spliit = lcode[yz]["vars"];
						 splut = spliit.split(" ");
						 //console.log(splut);
						let valuev;
						if (splut.length > 2) {
							for(let va=2; va < splut.length;va++){
								if(va===2){
									valuev = splut[va];
									
								} else {
								valuev = valuev + " " + splut[va];
							}
							}
						} else {
							valuev = splut[1];
						}
						let carr = lcode[y]["arr"];
						
						carr[index] = valuev;
					
					}	
						//console.log(lcode[y].vars) } }
						//let carr = lcode[y]["arr"];
						//			carr[index] = valobj.splut[2];
								}
							}
							//	console.log(index);

							} else {
								let T;
								let ai2;
								for(let ya = 0; ya<lcode.length; ya++){
					if(typeof lcode[ya]["vars"] !== "undefined") {
						let spliit = lcode[ya]["vars"];
						//console.log(lcode[y].vars) } }
						let splut = spliit.split(" ");
						if (splut[0] == ai) {
							//console.log(Number(splut[1]));
							if (Number(splut[1])) {
								//console.log(valobj.value);
								T = true;
								ai2 = Number(splut[1]);
								ai2 = String(ai2);
								//console.log(ai2);
								let job = {};
								Object.assign(job, { 
									"unknown type" : arrCheck[0] + "[" + ai2 + "]",
									
						"value" : {
							"type" : "var",
							"value" : valobj.value
						}}); 
								let lcode1 = lcode.slice(0,i+1);
								let lcode2 = lcode.slice(i+1);
								lcode1.push(job);
				lcode = lcode1.concat(lcode2);
				//console.log(lcode);
							}
						} else {
							//console.log("\x1b[33m[WARN]\x1b[37m index '" + ai + "' can't be used.");
						}
					}}		
							}

						}
					} 
					//console.log("CHECKED");
} }


					//var
				for(let y = 0; y<lcode.length; y++){
					if(typeof lcode[y]["vars"] !== "undefined") {
						let spliit = lcode[y]["vars"];
						//console.log(lcode[y].vars) } }
						let splut = spliit.split(" ");
						if(splut[0] == fname) {
							if (valobj.type === "var") {
								for(let y = 0; y<lcode.length; y++){
					if(typeof lcode[y]["vars"] !== "undefined") {
						let spliit = lcode[y]["vars"];
						let splut = spliit.split(" ");
						//console.log(lcode[y].vars) } }
						if(splut[0] == valobj.value) {
							
							iv = spliit.replace(valobj.value+" ", '');
							//console.log(iv);
							if(typeof iv !== "undefined"){
								
								
							valobj.value = iv;
					 }
						}
					}				 
				}
							} else {	
							iv = splut[1];
						}
							//console.log(splut[0] + valobj.value);
							if(typeof iv !== "undefined"){
								if(typeof valobj.type !== undefined && valobj.type !== "integer" && typeof valobj["value"] !== "underfined") {
						lcode[y]["vars"] = splut[0] + " " + valobj["value"].replace(/['"]+/g, '');
						checked = 1;
					}
					 }
						}
					}				 
				}
				if(checked = 0) {
				console.log("Oh shit, one of your function(\""+fname+"\") not registred! Recheck your code!");
				
				 }
				 }
				 } //unknown type
			} else {
		console.log("Maybe you wanna type some code, dude?)");
	}
	//console.log(lcode);
	
		//console.error("Array of lexems is empty!");

};
module.exports.parser = parser;
