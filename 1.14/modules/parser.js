function parser(lcode, dict) {
	let icv = require('iconv-lite');
	let readline = require("./node_modules/readline-sync/lib/readline-sync.js");
	//let mouse = require("./node_modules/robotjs-master/index.js");
	let logoClosed = false;
	let inputin = true;
	// let logoClosed = false;
	function expv2(fvar) {

				if (Number(fvar)) {
					fvar = Number(fvar);
					return fvar;
				} else if(fvar === "0") {
					fvar = 0;
					return fvar;
				}
			//	console.log(fvar);
		if (dict['ms'][fvar.split("[")[0]] && (fvar.replace("+"," + ").length === fvar.length && fvar.replace("-"," - ").length === fvar.length && fvar.replace("/"," / ").length === fvar.length && fvar.replace("*"," * ").length === fvar.length)) {
		if (fvar.split("[").length === 1) {
		fvar = dict['ms'][fvar.split("[")[0]]['value'];
	} else if(Number(fvar.split("[")[1].replace("]",""))) {
		fvar = dict['ms'][fvar.split("[")[0]]['value'][Number(fvar.split("[")[1].replace("]",""))-1];
	} else {
		fvar = dict['ms'][fvar.split("[")[0]]['value'][Number(dict['ms'][fvar.split("[")[1].replace("]","")]['value'])-1];
	}
	return fvar;
	}
						fvar = fvar.replace(/&%0/gim, ',').replace(/&%1/gim, ';');
						//console.log(Number(valobj.value));
						//console.log(valobj.value);
						let numbt = "";

						try {
						eval("numbt ="+fvar);

					} catch(err) {
						//console.log(err);
					}
					if (fvar.replace("+"," + ").length !== fvar.length || fvar.replace("-"," - ").length !== fvar.length || fvar.replace("/"," / ").length !== fvar.length || fvar.replace("*"," * ").length !== fvar.length) {
							var result = fvar.replace(/"[^"]+"/g, function (match) {
    return match.replace(/ /g, '&%s0');
});
	fvar = result;
	//console.log(result);

						let stringsum = false;
						if (!/\"(.*)\"/gim.test(fvar)) {
						if (Number(numbt)) {
							try {
							fvar = Number(numbt.replace(/&%5/gim, "+").replace(/&%6/gim, "-").replace(/&%7/gim, "*").replace(/&%8/gim, "/").replace(/&%s0/gim, " "));
							} catch(err) {
								fvar = Number(numbt);
								//console.log(fvar);
							}
							return fvar;
						//dict['ms'][fname.split("[")[0]]['type'] = 'number';
						//continue;
						} 
					}

						if (fvar.replace("+"," + ").length !== fvar.length || fvar.replace("-"," - ").length !== fvar.length || fvar.replace("/"," / ").length !== fvar.length || fvar.replace("*"," * ").length !== fvar.length) {
							let exp1 = fvar.replace(/\+/gim," + ").replace(/\-/gim," - ").replace(/\*/gim," * ").replace(/\//gim," / ").replace(/\(/gim," ( ").replace(/\)/gim," ) ").split(" ");
							let exp = [];
							for(let expi = 0; expi<exp1.length;expi++) {
								if (exp1[expi] !== "") {
									exp.push(exp1[expi]);
								}
							}
							for(let ep=0; ep < exp.length;ep++) {
								try {
								if (exp[ep] !== "*" && exp[ep] !== "/" && exp[ep] !== "+" && exp[ep] !== "-" && exp[ep] !== "(" && exp[ep] !== ")" && exp[ep] !== ".repeat(") {
									if (typeof exp[ep] === 'string' && exp[ep].replace(/\"/gim,"").length !== exp[ep].length && exp[ep+1] === "*") {
											exp[ep+1] = ".repeat(";
											//console.log("aasas");
											exp.splice(ep+3,0,")");
										}
									if (Number(exp[ep])) {
										exp[ep] = Number(exp[ep])
										continue;
									} else if(dict['ms'][exp[ep].split('[')[0]] && exp[ep].split('[').length === 1) {
										//console.log(exp[ep]);
										if (dict['ms'][exp[ep].split('[')[0]]['type'] !== "string") {
										exp[ep] = dict['ms'][exp[ep].split('[')[0]]['value'];
									} else {
										stringsum = true;
										///console.log(stringsum);
										exp[ep] = '"' + dict['ms'][exp[ep].split('[')[0]]['value'] + '"';
									}
									} else if (dict['ms'][exp[ep].split('[')[0]] && exp[ep].split('[').length !== 1)  {let ep2 = ep;
												while(exp[ep2].replace(/\[/gim,"").length !== exp[ep2].replace(/\]/gim,"").length) {
													exp[ep2] += exp[ep2+1];
													
													exp.splice(ep2+1,1);
													

												}
												//console.log(expv(exp[ep].split('[')[1].replace("]","")));
												//exp[ep] = dict['ms'][exp[ep].split('[')[0]]['value'][Number(dict['ms'][exp[ep].split('[')[1].replace("]","")]['value'])-1];
												exp[ep] = dict['ms'][exp[ep].split('[')[0]]['value'][expv2(exp[ep].split('[')[1].replace("]",""))-1];
												ep--;}
								}
							}catch(err){

							}
							}
							exp = exp.join('');
							//console.log(exp);
							try {
								//valboj.value = valobj.value.replace(/&%0/gim, ',').replace(/&%1/gim, ';');
							eval("fvar ="+exp.replace(/&%5/gim, "+").replace(/&%6/gim, "-").replace(/&%7/gim, "*").replace(/&%8/gim, "/").replace(/&%s0/gim, " "));
							fvar = fvar.replace(/&=dq/gim,'/"');
						//	if (stringsum === false) {
								//dict['ms'][fname.split("[")[0]]['type'] = 'number';
						//	} else {
							//dict['ms'][fname.split("[")[0]]['type'] = 'string'
						 } catch(err)  {
							console.log("ERR: Something bad on line " + i);
							//console.log(err);
						}
						
							//eval("console.log("+ exp + ");")
							//console.log(exp);

						}
						
					
					}
					try {
				return fvar.replace(/&%s0/gim, " ");
			} catch(err) {
				return fvar;
			}

				
}
	if (lcode && lcode.length !==0) {
		//console.log("РАБОТАЕТ ТУТ 3 СТРОКА");
		for(let i = 0;i < lcode.length; i++){
			let fname = lcode[i]["function"] ? lcode[i]["function"] : lcode[i]["unknown type"];
			fname = fname.toLowerCase();
			let valobj = lcode[i]["value"];
			//let vstr = lcode[i]["vars"];
			if (lcode[i]["function"] && dict["function"][fname.toLowerCase()]) {
				
				if(fname === "//"){
								}



			//console.log(valobj.value);
				
				//console.log('ТУТ ВСЕ РАБОТАЕТ БЛ');
				if (fname === "say") {

				let cf = dict["function"][fname.toLowerCase()];
				let iv;
				
					//console.log(valobj);
					if(dict['ms'][valobj.value]) {
						cf(dict['ms'][valobj.value]['value']);
						continue;
					} else {
						try{
						valobj.value = valobj.value.replace(/&%0/gim, ',').replace(/&%1/gim, ';');
						} catch(err12) {
							if (Number(valobj.value)) {
							cf(Number(valobj.value));
						//dict['ms'][fname.split("[")[0]]['type'] = 'number';
						continue;
						} 
						}
						//console.log(Number(valobj.value));
						//console.log(valobj.value);
						let numbt = "";

						try {
						eval("numbt ="+valobj.value);

					} catch(err) {
						//console.log(err);
					}
					if (valobj.value.replace("+"," + ").length !== valobj.value.length || valobj.value.replace("-"," - ").length !== valobj.value.length || valobj.value.replace("/"," / ").length !== valobj.value.length || valobj.value.replace("*"," * ").length !== valobj.value.length) {
							var result = valobj.value.replace(/"[^"]+"/g, function (match) {
    return match.replace(/ /g, '&%s0');
});
	valobj.value = result;
	//console.log(result);

						let stringsum = false;
						if (!/\"(.*)\"/gim.test(valobj.value)) {
						if (Number(numbt)) {
							cf(Number(numbt));
						//dict['ms'][fname.split("[")[0]]['type'] = 'number';
						continue;
						} 
					}

						if (valobj.value.replace("+"," + ").length !== valobj.value.length || valobj.value.replace("-"," - ").length !== valobj.value.length || valobj.value.replace("/"," / ").length !== valobj.value.length || valobj.value.replace("*"," * ").length !== valobj.value.length) {
							let exp1 = valobj.value.replace(/\+/gim," + ").replace(/\-/gim," - ").replace(/\*/gim," * ").replace(/\//gim," / ").replace(/\(/gim," ( ").replace(/\)/gim," ) ").split(" ");
							let exp = [];
							for(let expi = 0; expi<exp1.length;expi++) {
								if (exp1[expi] !== "") {
									
									exp.push(exp1[expi]);
								}
							}
							//console.log(exp);
							for(let ep=0; ep < exp.length;ep++) {
								try {
								if (exp[ep] !== "*" && exp[ep] !== "/" && exp[ep] !== "+" && exp[ep] !== "-" && exp[ep] !== "(" && exp[ep] !== ")" && exp[ep] !== ".repeat(" && exp[ep] !== "") {
									if (typeof exp[ep] === 'string' && exp[ep].replace(/\"/gim,"").length !== exp[ep].length && exp[ep+1] === "*") {
											exp[ep+1] = ".repeat(";
											//console.log("aasas");
											exp.splice(ep+3,0,")");
										}
									if (Number(exp[ep])) {
										exp[ep] = Number(exp[ep])
										continue;
									} else if(dict['ms'][exp[ep].split('[')[0]] && exp[ep].split('[').length === 1) {
										//console.log(exp[ep]);
										if (dict['ms'][exp[ep].split('[')[0]]['type'] !== "string") {
										exp[ep] = dict['ms'][exp[ep].split('[')[0]]['value'];
									} else {
										stringsum = true;
										///console.log(stringsum);
										exp[ep] = '"' + dict['ms'][exp[ep].split('[')[0]]['value'] + '"';
									}
									} else if (dict['ms'][exp[ep].split('[')[0]] && exp[ep].split('[').length !== 1)  {
									//	if (Number(exp[ep].split('[')[1].replace("]",""))) {
											//console.log(dict['ms'][exp[ep].split('[')[0]]['value']);
									//		if (typeof dict['ms'][exp[ep].split('[')[0]]['value'][Number(exp[ep].split('[')[1].replace("]",""))-1] === "string") {
									//		exp[ep] = '"'+dict['ms'][exp[ep].split('[')[0]]['value'][Number(exp[ep].split('[')[1].replace("]",""))-1]+'"';
								//		} else {
										//	exp[ep] =dict['ms'][exp[ep].split('[')[0]]['value'][Number(exp[ep].split('[')[1].replace("]",""))-1];
									//	}
									//			ep--;
									//	} else {
									//		if (dict['ms'][exp[ep].split('[')[1].replace("]","")]) {
									//			if (typeof dict['ms'][exp[ep].split('[')[0]]['value'][Number(dict['ms'][exp[ep].split('[')[1].replace("]","")]['value'])-1] === "string") {
									//		exp[ep] = '"'+dict['ms'][exp[ep].split('[')[0]]['value'][Number(dict['ms'][exp[ep].split('[')[1].replace("]","")]['value'])-1]+'"';
									//	} else {
									//		exp[ep] = dict['ms'][exp[ep].split('[')[0]]['value'][Number(dict['ms'][exp[ep].split('[')[1].replace("]","")]['value'])-1];
								//		}
												//console.log(exp);
												let ep2 = ep;
												while(exp[ep2].replace(/\[/gim,"").length !== exp[ep2].replace(/\]/gim,"").length) {
													exp[ep2] += exp[ep2+1];
													
													exp.splice(ep2+1,1);
													

												}
												//console.log(expv2(exp[ep].split('[')[1].replace("]","")));
												//exp[ep] = dict['ms'][exp[ep].split('[')[0]]['value'][Number(dict['ms'][exp[ep].split('[')[1].replace("]","")]['value'])-1];
												exp[ep] = dict['ms'][exp[ep].split('[')[0]]['value'][expv2(exp[ep].split('[')[1].replace("]",""))-1];
												ep--;
										//	}
										//}
									}
								}
							}catch(err){

							}
							}
							exp = exp.join('');
							try {
								//valboj.value = valobj.value.replace(/&%0/gim, ',').replace(/&%1/gim, ';');
							eval("cf("+exp.replace(/&%5/gim, "+").replace(/&%6/gim, "-").replace(/&%7/gim, "*").replace(/&%8/gim, "/").replace(/&%s0/gim, " ").replace(/&%a0/gim,"{").replace(/&%a1/gim,"}")+");");
							//fvar = fvar.replace(/&=dq/gim,'/"');
						//	if (stringsum === false) {
								//dict['ms'][fname.split("[")[0]]['type'] = 'number';
						//	} else {
							//dict['ms'][fname.split("[")[0]]['type'] = 'string'
						 } catch(err)  {
							console.log("ERR: Something bad on line " + i);
							//console.log(err);
						}
						continue;
							//eval("console.log("+ exp + ");")
							//console.log(exp);

						}
						
					
					}
				}
				 if (valobj.type === "string"  && inputin === true) {
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


				cf(valobj["value"].replace(/['"]+/g, '').replace(/&%5/gim, "+").replace(/&%6/gim, "-").replace(/&%7/gim, "*").replace(/&%8/gim, "/").replace(/&%s0/gim, " ").replace(/&%a0/gim,"{").replace(/&%a1/gim,"}")); 
			}
		}
			if (fname === "##include") {
				let fs = require("fs");
				let content = fs.readFileSync(valobj.value);
				let iv = require('iconv-lite');
				content = iv.decode(content, 'utf8');
				let lexer = require("./lexer.js").lexer;

let parser = require("./parser.js").parser;
				let lcode1 = lexer(content,dict);
				//console.log(lcode1);
				parser(lcode1,dict);
			}
			if (fname === "input") {
				let lcodet = lcode;
							let counter = i+1;
							let lcode1 = lcode.slice(0,i+1);
								let lcode2 = lcode.slice(i+1);
								let gs = 0;
								let indexemp = 0;
				let inputt = readline.question('Input: ');
				//console.log(inputt);
				//let inputt2 = new Buffer(inputt, "win1251");
				//console.log(icv.decode(inputt,"CODE"));
				let obj = {};
				//console.log(inputt);
				let ArrayT;
				try {
				eval('ArrayT = Array.isArray('+inputt+');');
				if (ArrayT === true) {

				} else {
					eval('ArrayT = '+kdfasjflaskjflsdjfaskldfjkasdlfjsadlkfjERRRORGENERATOR+';');
				}
				//console.log(ArrayT);
			} catch(err) {
				//	console.log(err);
				//console.log(inputt);
				if (Number(inputt) && inputt.replace(/\-/gim,"").replace(/\+/gim,"").replace(/\*/gim,"").replace(/\//gim,"").length === inputt.length) {
					inputt = Number(inputt);
				} else { if(typeof inputt === "string" && inputt !== "0") {
					inputt = '"' + inputt.replace(/\"/gim,"&=dq") + '"';
				} else if (inputt == "0") {
					inputt = 0;
				}

			}
			}
			//console.log(inputt);
			//console.log(inputt);
		//	input[0] = "";
			//console.log(inputt.replace(/\"/gim,"a"));
				Object.assign(obj, { 
									"unknown type" : lcode[i]["varname"],
									
						"value" : {
							"type" : "string",
							"value" : inputt
						}}); 
				lcode1.push(obj);
				lcode = lcode1.concat(lcode2);
				//console.log(lcode);
				//console.log(dict['ms']);

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
			//console.log(fname);
			if (fname === "logo.off") {
				//console.log("asas");
				logoClosed = true
			}
			if (fname === "logo.on") {
				logoClosed = false
			}
			if (fname === "clrscr") {
									 process.stdout.write('\033c');
									 if (logoClosed === false) {
		console.log("\x1b[32m###############################################");
		console.log("##          Creator: Alexandr Ustinov        ##");
		console.log("##   Vk page: https://vk.com/sasha_ustinov   ##");
		console.log("##  Lejics version: Release Background v1.14 ##");
		console.log("###############################################");
		console.log();
		console.log();
		console.log();
		console.log("_______________________________________________\x1b[37m");
	}
		//console.log(JSON.stringify(lcode,null,4));
								}
			if (fname === "range" && valobj["type"] === "warn") {
				//console.log("\x1b[37m");
				console.log("\x1b[33m[WARN]\x1b[37m 'range' argument error. line: " + valobj["warnl"]);
			//	console.log("\x1b[37m", "");
			}
			if (fname === "range" && valobj['type'] !== "warn") {
				
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
dict['ms'][lcode[i]['varname']] = {
	"status":"var",
	"value":parseInt(valuee),
	"type":"number"
};

//console.log(lcode1);
			}
			function expv(fvar) {
				if (Number(fvar)) {
					fvar = Number(fvar);
					return fvar;
				} else if(fvar === "0") {
					fvar = 0;
					return fvar;
				}
			//	console.log(fvar);
		if (dict['ms'][fvar.split("[")[0]] && (fvar.replace("+"," + ").length === fvar.length && fvar.replace("-"," - ").length === fvar.length && fvar.replace("/"," / ").length === fvar.length && fvar.replace("*"," * ").length === fvar.length)) {
		if (fvar.split("[").length === 1) {
		fvar = dict['ms'][fvar.split("[")[0]]['value'];
		return fvar;
	} else if(Number(fvar.split("[")[1].replace("]",""))) {
		fvar = dict['ms'][fvar.split("[")[0]]['value'][Number(fvar.split("[")[1].replace("]",""))-1];
	} else {
		fvar = dict['ms'][fvar.split("[")[0]]['value'][Number(dict['ms'][fvar.split("[")[1].replace("]","")]['value'])-1];
	}
	return fvar;
	}
						fvar = fvar.replace(/&%0/gim, ',').replace(/&%1/gim, ';');
						//console.log(Number(valobj.value));
						//console.log(valobj.value);
						let numbt = "";

						try {
						eval("numbt ="+fvar);

					} catch(err) {
						//console.log(err);
					}
					if (fvar.replace("+"," + ").length !== fvar.length || fvar.replace("-"," - ").length !== fvar.length || fvar.replace("/"," / ").length !== fvar.length || fvar.replace("*"," * ").length !== fvar.length) {
							var result = fvar.replace(/"[^"]+"/g, function (match) {
    return match.replace(/ /g, '&%s0');
});
	fvar = result;
	//console.log(result);

						let stringsum = false;
						if (!/\"(.*)\"/gim.test(fvar)) {
						if (Number(numbt)) {
							try {
							fvar = Number(numbt.replace(/&%5/gim, "+").replace(/&%6/gim, "-").replace(/&%7/gim, "*").replace(/&%8/gim, "/").replace(/&%s0/gim, " "));
							} catch(err) {
								fvar = Number(numbt);
								//console.log(fvar);
							}
							return fvar;
						//dict['ms'][fname.split("[")[0]]['type'] = 'number';
						//continue;
						} 
					}

						if (fvar.replace("+"," + ").length !== fvar.length || fvar.replace("-"," - ").length !== fvar.length || fvar.replace("/"," / ").length !== fvar.length || fvar.replace("*"," * ").length !== fvar.length) {
							let exp1 = fvar.replace(/\+/gim," + ").replace(/\-/gim," - ").replace(/\*/gim," * ").replace(/\//gim," / ").replace(/\(/gim," ( ").replace(/\)/gim," ) ").split(" ");
							let exp = [];
							for(let expi = 0; expi<exp1.length;expi++) {
								if (exp1[expi] !== "") {
									exp.push(exp1[expi]);
								}
							}
							for(let ep=0; ep < exp.length;ep++) {
								try {
								if (exp[ep] !== "*" && exp[ep] !== "/" && exp[ep] !== "+" && exp[ep] !== "-" && exp[ep] !== "(" && exp[ep] !== ")" && exp[ep] !== ".repeat(") {
									if (typeof exp[ep] === 'string' && exp[ep].replace(/\"/gim,"").length !== exp[ep].length && exp[ep+1] === "*") {
											exp[ep+1] = ".repeat(";
											//console.log("aasas");
											exp.splice(ep+3,0,")");
										}
									if (Number(exp[ep])) {
										exp[ep] = Number(exp[ep])
										continue;
									} else if(dict['ms'][exp[ep].split('[')[0]] && exp[ep].split('[').length === 1) {
										//console.log(exp[ep]);
										if (dict['ms'][exp[ep].split('[')[0]]['type'] !== "string") {
										exp[ep] = dict['ms'][exp[ep].split('[')[0]]['value'];
									} else {
										stringsum = true;
										///console.log(stringsum);
										exp[ep] = '"' + dict['ms'][exp[ep].split('[')[0]]['value'] + '"';
									}
									} else if (dict['ms'][exp[ep].split('[')[0]] && exp[ep].split('[').length !== 1)  {
										/*if (Number(exp[ep].split('[')[1].replace("]",""))) {
											//console.log(dict['ms'][exp[ep].split('[')[0]]['value']);
											if (typeof dict['ms'][exp[ep].split('[')[0]]['value'][Number(exp[ep].split('[')[1].replace("]",""))-1] === "string") {
											exp[ep] = '"'+dict['ms'][exp[ep].split('[')[0]]['value'][Number(exp[ep].split('[')[1].replace("]",""))-1]+'"';
										} else {
											exp[ep] =dict['ms'][exp[ep].split('[')[0]]['value'][Number(exp[ep].split('[')[1].replace("]",""))-1];
										}
												ep--;
										} else {
											if (dict['ms'][exp[ep].split('[')[1].replace("]","")]) {
												if (typeof dict['ms'][exp[ep].split('[')[0]]['value'][Number(dict['ms'][exp[ep].split('[')[1].replace("]","")]['value'])-1] === "string") {
											exp[ep] = '"'+dict['ms'][exp[ep].split('[')[0]]['value'][Number(dict['ms'][exp[ep].split('[')[1].replace("]","")]['value'])-1]+'"';
										} else {
											exp[ep] = dict['ms'][exp[ep].split('[')[0]]['value'][Number(dict['ms'][exp[ep].split('[')[1].replace("]","")]['value'])-1];
										}*/		
												let ep2 = ep;
												while(exp[ep2].replace(/\[/gim,"").length !== exp[ep2].replace(/\]/gim,"").length) {
													exp[ep2] += exp[ep2+1];
													
													exp.splice(ep2+1,1);
													

												}
												//console.log(expv2(exp[ep].split('[')[1].replace("]","")));
												//exp[ep] = dict['ms'][exp[ep].split('[')[0]]['value'][Number(dict['ms'][exp[ep].split('[')[1].replace("]","")]['value'])-1];
												exp[ep] = dict['ms'][exp[ep].split('[')[0]]['value'][expv2(exp[ep].split('[')[1].replace("]",""))-1];
												ep--;
											
										
									}
								}
							}catch(err){

							}
							}
							exp = exp.join('');
							//console.log(exp);
							try {
								//valboj.value = valobj.value.replace(/&%0/gim, ',').replace(/&%1/gim, ';');
							eval("fvar ="+exp.replace(/&%5/gim, "+").replace(/&%6/gim, "-").replace(/&%7/gim, "*").replace(/&%8/gim, "/").replace(/&%s0/gim, " "));
							fvar = fvar.replace(/&=dq/gim,'/"');
						//	if (stringsum === false) {
								//dict['ms'][fname.split("[")[0]]['type'] = 'number';
						//	} else {
							//dict['ms'][fname.split("[")[0]]['type'] = 'string'
						 } catch(err)  {
							//console.log("ERR: Something bad on line " + i);
							//console.log(err);
						}
						
							//eval("console.log("+ exp + ");")
							//console.log(exp);

						}
						
					
					}
					try {
				return fvar.replace(/&%s0/gim, " ");
			} catch(err) {
				return fvar;
			}

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
				let ccide = lcode[i].code.replace(fvar, '');
				let testt = ccide;
				ccide = ccide.replace(znak, '');
				ccide = ccide.replace(svar, '');
				//ccide = ccide.slice(1);
				//console.log(ccide);
				//console.log(ccide.replace('{','').length);
		     	//console.log(ccide.replace('}','').length);
		     	//console.log(valobj.value);
		     	//console.log();
				ccide = ccide.replace('{', '');
				

				//let testt = ccide.slice(0, -1);
		     	//console.log(ccide);
		     	
		     	
		     	
			ccide = ccide.slice(0, -1);
			//console.log(ccide);
			
			
			if (ccide.slice(ccide.length-2) === '} ' && ccide.replace('{','').length === ccide.length) {
				//console.log(ccide);
				ccide = ccide.slice(0, -2);
			}
		//console.log(ccide.toString());
		//	console.log(ccide.slice(0, -1) );
				let ccide2v = ccide;
				ccide = ccide.trim();
				
				let mcode = ccide.split(/,(?![^{}]*\})/gim);
					for(let ae = 0;ae < mcode.length;ae++){

					//console.log(mcode[ae]);
					//console.log(mcode[ae].replace(/}/g,""));
					
					//console.log();
					

					if (mcode[ae].replace(/{/gim,"").length < mcode[ae].replace(/}/gim,"").length) {
						//console.log(mcode);
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
			for(let li = 0; li<mcode.length; li++) {
				//console.log(mcode[li]);
				mcode[li] = mcode[li].replace(/"[^"]+"/g, function (match) {
    return match.replace(/&%0/g, ',');
});
			}
			for(let li = 0; li<mcode.length; li++) {
				//console.log(mcode[li]);
				mcode[li] = mcode[li].replace(/"[^"]+"/g, function (match) {
    return match.replace(/&%1/g, ';');
});
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
	
	
	fvar = expv(fvar);
	svar = expv(svar);
	//console.log(fvar === svar);
	//console.log(svar);
	//console.log(fvar);




				 //console.log(fvar + " " + svar);

				//let test = fvar/1;

				//console.log(isInteger(Number(fvar)));
				
			//    console.log(fvar);
			//console.log(mcode);
				
							//eval("console.log("+ exp + ");")
							//console.log(exp);

						



							try {
								
				fvar = fvar.replace(/['"]+/g, "")
				
				} catch(err) {

				}
				//console.log(fvar);
				//console.log(svar);
			//	console.log(znak);

				try {
					
					svar = svar.replace(/['"]+/g, "")
				} catch(err) {

				}

				
				//console.log(fvar);
			//console.log(svar);
			//	console.log(znak);
				switch(znak) {
					case "=":
				//	console.log(fvar === svar);
				//	console.log(fvar);
					//console.log(svar);
						if(fvar === svar) {
							//console.log("wro");
							let lexer = require("./lexer.js").lexer;
							let result = ccide2v.replace(/"[^"]+"/g, function (match) {
    return match.replace(/-/gim,"&T&&=&");
});
	ccide2v = result;
	ccide2v = ccide2v.replace(/,/gim,";");
							let lcode1 = lexer(ccide2v, dict);
							//console.log(lcode1);
							let parser = require("./parser.js").parser;
							parser(lcode1,dict);
//
							continue;
						}
					

											

					break;
					case "!=":
					if(Number(fvar)){
						//fvar = Number(fvar);
					}
					if(Number(svar)){
						//svar = Number(svar);
					}
						if(fvar !== svar) {
							let lexer = require("./lexer.js").lexer;
							let result = ccide2v.replace(/"[^"]+"/g, function (match) {
    return match.replace(/-/gim,"&T&&=&");
});
	ccide2v = result;
	ccide2v = ccide2v.replace(/,/gim,";");
							let lcode1 = lexer(ccide2v, dict);
							let parser = require("./parser.js").parser;
							parser(lcode1,dict);
							//continue;
						}
					break;
					case ">":
					if(Number(fvar)){
					//	fvar = Number(fvar);
					}
					if(Number(svar)){
						//svar = Number(svar);
					}
						if(fvar > svar) {
							let lexer = require("./lexer.js").lexer;
							let result = ccide2v.replace(/"[^"]+"/g, function (match) {
    return match.replace(/-/gim,"&T&&=&");
});
	ccide2v = result;
	ccide2v = ccide2v.replace(/,/gim,";");
							let lcode1 = lexer(ccide2v, dict);
							let parser = require("./parser.js").parser;
							parser(lcode1,dict);
						}
					break;
					case "<":
					if(Number(fvar)){
						//fvar = Number(fvar);
					}
					if(Number(svar)){
						//svar = Number(svar);
					}
						if(fvar < svar) {
							let lexer = require("./lexer.js").lexer;
							let result = ccide2v.replace(/"[^"]+"/g, function (match) {
    return match.replace(/-/gim,"&T&&=&");
});
	ccide2v = result;
	ccide2v = ccide2v.replace(/,/gim,";");
							let lcode1 = lexer(ccide2v, dict);
							let parser = require("./parser.js").parser;
							parser(lcode1,dict);
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
				let ccide = lcode[i]["code"].replace(fvar, '');
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
				let ccide2v = ccide;
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
			for(let li = 0; li<mcode.length; li++) {
				//console.log(mcode[li]);
				mcode[li] = mcode[li].replace(/"[^"]+"/g, function (match) {
    return match.replace(/&%0/g, ',');
});
			}
			for(let li = 0; li<mcode.length; li++) {
				//console.log(mcode[li]);
				mcode[li] = mcode[li].replace(/"[^"]+"/g, function (match) {
    return match.replace(/&%1/g, ';');
});
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



				fvar = expv(fvar);
	svar = expv(svar);


				//let test = fvar/1;

				//console.log(isInteger(Number(fvar)));
				
			//    console.log(fvar);
			try {
				fvar = fvar.replace(/['"]+/g, "")
				svar = svar.replace(/['"]+/g, "")
			} catch(err) {

			}
				//console.log(znak);
				//console.log(fvar);
				//console.log(svar);
				////console.log(znak);
				switch(znak) {
					case "=":
					//console.log(Number('"1"'));
					if(Number(fvar)) {
						//fvar = Number(fvar);
						//console.log("net");
					}
					
					if(Number(svar)) {
						//console.log("wa");
						//svar = Number(svar);

					}
					//console.log(fvar === svar);
						if(fvar === svar) {
							//console.log(Number(svar));
							let lexer = require("./lexer.js").lexer;
							let result = ccide2v.replace(/"[^"]+"/g, function (match) {
    return match.replace(/-/gim,"&T&&=&");
});
	ccide2v = result;
	ccide2v = ccide2v.replace(/,/gim,";");
							let lcode1 = lexer(ccide2v, dict);
							let parser = require("./parser.js").parser;
							parser(lcode1,dict);
							i--
						}
					

											

					break;
					case "!=":
					if(Number(fvar)){
						//fvar = Number(fvar);
					}
					if(Number(svar)){
						//svar = Number(svar);
					}
						if(fvar !== svar) {
							//console.log("FVAR:");
							//console.log(fvar);
							//console.log("SVAR:");
							//console.log(svar);
							let lexer = require("./lexer.js").lexer;
							let result = ccide2v.replace(/"[^"]+"/g, function (match) {
    return match.replace(/-/gim,"&T&&=&");
});
	ccide2v = result;
	ccide2v = ccide2v.replace(/,/gim,";");
							let lcode1 = lexer(ccide2v, dict);
							let parser = require("./parser.js").parser;
							parser(lcode1,dict);
							i--
						}
						
					break;
					case ">":
					if(Number(fvar)){
						//fvar = Number(fvar);
					}
					if(Number(svar)){
						//svar = Number(svar);
					}
						if(fvar > svar) {

							let lexer = require("./lexer.js").lexer;
							let result = ccide2v.replace(/"[^"]+"/g, function (match) {
    return match.replace(/-/gim,"&T&&=&");
});
	ccide2v = result;
	ccide2v = ccide2v.replace(/,/gim,";");
							let lcode1 = lexer(ccide2v, dict);
							let parser = require("./parser.js").parser;
							parser(lcode1,dict);
							i--
						
						}
					break;
					case "<":
					if(Number(fvar)){
						//fvar = Number(fvar);
					}
					if(Number(svar)){
						//svar = Number(svar);
					}
						if(fvar < svar) {

							let lexer = require("./lexer.js").lexer;
							let result = ccide2v.replace(/"[^"]+"/g, function (match) {
    return match.replace(/-/gim,"&T&&=&");
});
	ccide2v = result;
	ccide2v = ccide2v.replace(/,/gim,";");
							let lcode1 = lexer(ccide2v, dict);
							let parser = require("./parser.js").parser;
							parser(lcode1,dict);
							i--
						
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

				let ccide = lcode[i]["code"].replace(fvar, '');
				ccide = ccide.replace(znak, '');
				ccide = ccide.replace(svar, '');
				ccide = ccide.replace(start, '');
				//console.log(valobj['value']);
				ccide = ccide.slice(0, -1);
				if (ccide.slice(ccide.length-2) === '} ' && ccide.replace('{','').length === ccide.length) {
				ccide = ccide.slice(0, -2);
			}
			//console.log(ccide.slice(0, -1) );
				let ccide2v = ccide;
				//console.log(ccide);
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
			for(let li = 0; li<mcode.length; li++) {
				//console.log(mcode[li]);
				mcode[li] = mcode[li].replace(/"[^"]+"/g, function (match) {
    return match.replace(/&%0/g, ',');
});
			}
			for(let li = 0; li<mcode.length; li++) {
				//console.log(mcode[li]);
				mcode[li] = mcode[li].replace(/"[^"]+"/g, function (match) {
    return match.replace(/&%1/g, ';');
});
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

				
fvar = expv(fvar);
	svar = expv(svar);
try {
								
				fvar = fvar.replace(/['"]+/g, "")
				
				} catch(err) {

				}
				//console.log(fvar);
				//console.log(svar);
			//	console.log(znak);

				try {
					
					svar = svar.replace(/['"]+/g, "")
				} catch(err) {

				}
			
				
				//console.log(fvar);
				//console.log(svar);
				////console.log(znak);
				if (Number(fvar+1) && Number(svar+1)) {
				switch(znak) {
					
					case ">":
					if(Number(fvar+1)){
						//fvar = Number(fvar);
					}
					if(Number(svar+1)){
						//svar = Number(svar);
					}
						if(fvar > svar) {

							let lexer = require("./lexer.js").lexer;
							let result = ccide2v.replace(/"[^"]+"/g, function (match) {
    return match.replace(/-/gim,"&T&&=&");
});
	ccide2v = result;
	ccide2v = ccide2v.replace(/,/gim,";");
							let lcode1 = lexer(ccide2v, dict);
							let parser = require("./parser.js").parser;
							parser(lcode1,dict);
							i--
						
						}
					break;
					case "<":
					if(Number(fvar+1)){
						//fvar = Number(fvar);
					}
					if(Number(svar+1)){
						//svar = Number(svar);
					}
						if(fvar < svar) {

							let lexer = require("./lexer.js").lexer;
							let result = ccide2v.replace(/"[^"]+"/g, function (match) {
    return match.replace(/-/gim,"&T&&=&");
});
	ccide2v = result;
	ccide2v = ccide2v.replace(/,/gim,";");
	//console.log(ccide2v);
							let lcode1 = lexer(ccide2v, dict);
							let parser = require("./parser.js").parser;
							parser(lcode1,dict);
							i--
						
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
			function expv(fvar) {
				//console.log(fvar);
				//console.log(fvar);
				//console.log(fvar[fvar.length-1]);
				if (fvar[0] === '"' && fvar[fvar.length-1] === '"' &&(fvar.replace("+"," + ").length === fvar.length && fvar.replace("-"," - ").length === fvar.length && fvar.replace("/"," / ").length === fvar.length && fvar.replace("*"," * ").length === fvar.length)) {
				//	console.log(fvar.substring(1,fvar.length-1));
					return fvar.substring(1,fvar.length-1);
					//console.log(fvar);
				}
				if (Number(fvar)) {
					fvar = Number(fvar);

					return fvar;
				} else if(fvar === "0") {
					fvar = 0;
					return fvar;
				}
			//	console.log(fvar);
		if (dict['ms'][fvar.split("[")[0]] && (fvar.replace("+"," + ").length === fvar.length && fvar.replace("-"," - ").length === fvar.length && fvar.replace("/"," / ").length === fvar.length && fvar.replace("*"," * ").length === fvar.length)) {
		if (fvar.split("[").length === 1) {
		fvar = dict['ms'][fvar.split("[")[0]]['value'];

	} else if(Number(fvar.split("[")[1].replace("]",""))) {
		fvar = dict['ms'][fvar.split("[")[0]]['value'][Number(fvar.split("[")[1].replace("]",""))-1];
	} else {
		fvar = dict['ms'][fvar.split("[")[0]]['value'][Number(dict['ms'][fvar.split("[")[1].replace("]","")]['value'])-1];
	}
	return fvar;
	}
						fvar = fvar.replace(/&%0/gim, ',').replace(/&%1/gim, ';');
						//console.log(Number(valobj.value));
						//console.log(valobj.value);
						let numbt = "";

						try {
						eval("numbt ="+fvar);

					} catch(err) {
						//console.log(err);
					}
					if (fvar.replace("+"," + ").length !== fvar.length || fvar.replace("-"," - ").length !== fvar.length || fvar.replace("/"," / ").length !== fvar.length || fvar.replace("*"," * ").length !== fvar.length) {
							var result = fvar.replace(/"[^"]+"/g, function (match) {
    return match.replace(/ /g, '&%s0');
});
	fvar = result;
	//console.log(result);

						let stringsum = false;
						if (!/\"(.*)\"/gim.test(fvar)) {
						if (Number(numbt)) {
							try {
							fvar = Number(numbt.replace(/&%5/gim, "+").replace(/&%6/gim, "-").replace(/&%7/gim, "*").replace(/&%8/gim, "/").replace(/&%s0/gim, " "));
							} catch(err) {
								fvar = Number(numbt);
								//console.log(fvar);
							}
							//console.log(fvar);
							return fvar;
						//dict['ms'][fname.split("[")[0]]['type'] = 'number';
						//continue;
						} 
					}

						if (fvar.replace("+"," + ").length !== fvar.length || fvar.replace("-"," - ").length !== fvar.length || fvar.replace("/"," / ").length !== fvar.length || fvar.replace("*"," * ").length !== fvar.length) {
							let exp1 = fvar.replace(/\+/gim," + ").replace(/\-/gim," - ").replace(/\*/gim," * ").replace(/\//gim," / ").replace(/\(/gim," ( ").replace(/\)/gim," ) ").split(" ");
							let exp = [];
							for(let expi = 0; expi<exp1.length;expi++) {
								if (exp1[expi] !== "") {
									exp.push(exp1[expi]);
								}
							}
							for(let ep=0; ep < exp.length;ep++) {
								try {
								if (exp[ep] !== "*" && exp[ep] !== "/" && exp[ep] !== "+" && exp[ep] !== "-" && exp[ep] !== "(" && exp[ep] !== ")" && exp[ep] !== ".repeat(") {
									if (typeof exp[ep] === 'string' && exp[ep].replace(/\"/gim,"").length !== exp[ep].length && exp[ep+1] === "*") {
											exp[ep+1] = ".repeat(";
											//console.log("aasas");
											exp.splice(ep+3,0,")");
										}
									if (Number(exp[ep])) {
										exp[ep] = Number(exp[ep])
										continue;
									} else if(dict['ms'][exp[ep].split('[')[0]] && exp[ep].split('[').length === 1) {
										//console.log(dict['ms'][exp[ep].split('[')[0]]['type']);
										if (dict['ms'][exp[ep].split('[')[0]]['type'] !== "string") {
										exp[ep] = dict['ms'][exp[ep].split('[')[0]]['value'];
									} else {
										stringsum = true;
										///console.log(stringsum);
										exp[ep] = '"' + dict['ms'][exp[ep].split('[')[0]]['value'] + '"';
										console.log(exp[ep]);
									//	console.log(exp);
										//console.log(dict['ms'][exp[ep].split('[')[0]]['value']);
									}
									} else if (dict['ms'][exp[ep].split('[')[0]] && exp[ep].split('[').length !== 1)  {let ep2 = ep;
												while(exp[ep2].replace(/\[/gim,"").length !== exp[ep2].replace(/\]/gim,"").length) {
													exp[ep2] += exp[ep2+1];
													
													exp.splice(ep2+1,1);
													

												}
												//console.log(expv(exp[ep].split('[')[1].replace("]","")));
												//exp[ep] = dict['ms'][exp[ep].split('[')[0]]['value'][Number(dict['ms'][exp[ep].split('[')[1].replace("]","")]['value'])-1];
												exp[ep] = dict['ms'][exp[ep].split('[')[0]]['value'][expv(exp[ep].split('[')[1].replace("]",""))-1];
												ep--;}
								}
							}catch(err){

							}
							}
							//console.log(exp);
							exp = exp.join('');
						//	console.log(exp);
							//console.log(exp);
							try {
								//valboj.value = valobj.value.replace(/&%0/gim, ',').replace(/&%1/gim, ';');
							eval("fvar ="+exp.replace(/&%5/gim, "+").replace(/&%6/gim, "-").replace(/&%7/gim, "*").replace(/&%8/gim, "/").replace(/&%s0/gim, " "));
							fvar = fvar.replace(/&=dq/gim,'/"');
							//console.log(fvar.replace(/&=dq/gim,'\"'));							//console.log(fvar);
						//	if (stringsum === false) {
								//dict['ms'][fname.split("[")[0]]['type'] = 'number';
						//	} else {
							//dict['ms'][fname.split("[")[0]]['type'] = 'string'
						 } catch(err)  {
							console.log("ERR: Something bad on line " + i);
							//console.log(exp);
							//console.log(err);
						}
						
							//eval("console.log("+ exp + ");")
							//console.log(exp);

						}
						
					
					}
					try {
				return fvar.replace(/&%s0/gim, " ");
			} catch(err) {
				return fvar;
			}

				}

				let checked = 0;
				fname = lcode[i]['unknown type'];
				let arrCheck = fname.split("[");
				try {
				valobj.value = valobj.value.replace("&%0", ",");
				valobj.value = valobj.value.replace("&%1", ";");
			} catch(err) {
				valobj.value = "&$=numb=" + valobj.value;
			}
			//console.log(fname.substring(0,7).toLowerCase() === "emulate");
				//console.log(valobj.value);
				//console.log(arrCheck[1].replace("]", ""));
				//array
				//console.log(fname);
				if (fname.substring(0,8).toLowerCase() === "emulate(") {
					//console.log(fname);
							let ccide2v = expv(fname.substring(0,fname.length-1).replace(fname.substring(0,8),""));
							//console.log(ccide2v.replace(/\\\"/gim,'"'));
							//ccide2v = ccide2v.replace(/\\\"/gim,'"');
						//	console.log(ccide2v);
							let lexer = require("./lexer.js").lexer;
							let result = ccide2v.replace(/"[^"]+"/g, function (match) {
    return match.replace(/-/gim,"&T&&=&");
});
	ccide2v = result;
	ccide2v = ccide2v.replace(/,/gim,";");
	ccide2v = '\"'+ccide2v.replace(/\/"/gim,'&dq')+'\"'
							let lcode1;
							eval("lcode1 = lexer("+ccide2v+", dict);");
							let parser = require("./parser.js").parser;
							parser(lcode1,dict);
						
					continue;
				}
				if (dict["file"][fname.split("(")[0].toLowerCase()]) {
					let fs = require("fs");
					let v = lcode[i]['var'];
					let path = lcode[i]['filepath'];
					console.log(path)
					let path2 = fs.readFileSync("cfg/curretPath.ljcfg");
							let iv = require('iconv-lite');
							//path2 = iv.decode(path, 'utf-8');
let cpath = fs.readFileSync("cfg/curretPathClean.ljcfg");
							iv = require('iconv-lite');
						//	cpath = iv.decode(cpath, 'utf-8');
					//console.log(lcode);
					if (fname.split("(")[0] === "file.readall") {


						
							path = expv(path);
							//console.log(expv(path));
							let content;
							try {
							content = fs.readFileSync(path);

							} catch(err) {
								try {
								content = fs.readFileSync(cpath+path);
								
							} catch(err1) {
								console.log("Err with file work.");
								//console.log(cpath);
								continue;
							}
							}
							content = iv.decode(content, 'utf-8');
							//console.log(content)
							let scode = {};
							//console.log(v);
							dict['ms'][v.trim()] = {
								"type" : "string",
								"value" : content,
								"status" : "var"
							}
							
						
						 

						 
				}/*ПРОБЛЕМА - ПЕРЕМЕННЫЕ ПЛОХО ОБЪЯВЛЯЮТСЯ. else if(fname.split("(")[0] === "file.write"){
					path = expv(path).replace(/"/gim,"");
					v = expv(v);
					//console.log(v[v.length-1]);
					if (v[0] === '"' && v[v.length-1] === '"') {
						v = v.substring(1,v.length-1);
						//console.log(v);
					}
							//console.log(expv(path));
							try {
							fs.appendFileSync(path,v);
							} catch(err) {
								try {
								fs.appendFileSync(cpath+path,v);
								
							} catch(err1) {
								console.log("Err with file work.");
								//console.log(err1);
								continue;
							}
							}
											}*/
			}

				if (!dict["file"][fname.split("(")[0].toLowerCase()] && fname.split("(").length === 1) {



				//var
				if (fname.replace("//","").length === fname.length) {
				if(dict['ms'][fname.split("[")[0]]) {
					if (dict['ms'][fname.split("[")[0]]['status'] === 'var') {
						//??VAR>>ARR([] etk)
						try {
							let arrt;
							eval("arrt = " + valobj.value);
							if (Array.isArray(arrt) === true) {
								dict['ms'][fname.split("[")[0]]['status'] = 'array';
								dict['ms'][fname.split("[")[0]]['type'] = undefined;
								dict['ms'][fname.split("[")[0]]['value'] = arrt;
								continue;
							}
						}catch(err){

						}
						//??VAR>>ARR([] etk) END
						try {
						if (valobj.value.split('[').length !== 1) {
							//console.log(valobj.value.split('[')[0]);
							if (dict['ms'][valobj.value.split('[')[0]]) {
							if (Number(valobj.value.split('[')[1].replace("]","")) && dict['ms'][valobj.value.split('[')[0]]['status'] === "array") {
								dict['ms'][fname.split("[")[0]]['value'] =dict['ms'][valobj.value.split('[')[0]]['value'][Number(valobj.value.split('[')[1].replace("]",""))-1]
								dict['ms'][fname.split("[")[0]]['status'] = 'var';
								//console.log(Array.isArray(dict['ms'][valobj.value.split('[')[0]]['value'][Number(valobj.value.split('[')[1].replace("]",""))-1]));
								if (Array.isArray(dict['ms'][valobj.value.split('[')[0]]['value'][Number(valobj.value.split('[')[1].replace("]",""))-1]) === true) {
									dict['ms'][fname.split("[")[0]]['status'] = 'array';
									dict['ms'][fname.split("[")[0]]['type'] = undefined;
								}
								if (typeof dict['ms'][fname.split("[")[0]]['value'] === "string") {
								dict['ms'][fname.split("[")[0]]['type'] = "string";
							} else if (typeof dict['ms'][fname.split("[")[0]]['value'] === "number") {
								dict['ms'][fname.split("[")[0]]['type'] = "number";
							}

							} else if(!Number(valobj.value.split('[')[1].replace("]","")) && dict['ms'][valobj.value.split('[')[0]]['status'] === "array") {
								dict['ms'][fname.split("[")[0]]['value'] =dict['ms'][valobj.value.split('[')[0]]['value'][Number(dict['ms'][valobj.value.split('[')[1].replace("]","")]['value'])-1]
								dict['ms'][fname.split("[")[0]]['status'] = 'var';
								if (Array.isArray(dict['ms'][valobj.value.split('[')[0]]['value'][Number(dict['ms'][valobj.value.split('[')[1].replace("]","")]['value'])-1]) === true) {
									dict['ms'][fname.split("[")[0]]['status'] = 'array';
									dict['ms'][fname.split("[")[0]]['type'] = undefined;
								}
								if (typeof dict['ms'][fname.split("[")[0]]['value'] === "string") {
								dict['ms'][fname.split("[")[0]]['type'] = "string";
							} else if (typeof dict['ms'][fname.split("[")[0]]['value'] === "number") {
								dict['ms'][fname.split("[")[0]]['type'] = "number";
							}
							}

							continue;
						}
						}
					} catch(err2) {

					}
						if(valobj.value.replace(/"/gim, '').length === valobj.value.length) {
							if(dict['ms'][valobj.value]) {
								dict['ms'][fname.split("[")[0]]['value'] = dict['ms'][valobj.value]['value'];
								dict['ms'][fname.split("[")[0]]['type'] = dict['ms'][valobj.value]['type'];
								if (dict['ms'][valobj.value]['status'] !== "const") {
								dict['ms'][fname.split("[")[0]]['status'] = dict['ms'][valobj.value]['status'];
							} else {
								dict['ms'][fname.split("[")[0]]['status'] = "var";
								continue;
								//dict['ms'][fname.split("[")[0]] = dict['ms'][valobj.value];
							}

							} if (Number(valobj.value.replace("&$=numb=","")) || valobj.value.replace("&$=numb=","") === "0") {

							//console.log(valobj.value.replace("&$=numb=",""));
						eval("dict['ms'][fname.split('[')[0]]['value'] = "+valobj.value.replace('&$=numb=',''));
						dict['ms'][fname.split("[")[0]]['type'] = 'number';
					} else {
						//console.log(Number(valobj.value));
						//console.log(valobj.value);
						let numbt = "";

						try {
						eval("numbt ="+valobj.value);

					} catch(err) {
						//console.log(err);
					}

						let stringsum = false;
						if (Number(numbt)) {
							dict['ms'][fname.split("[")[0]]['value'] = Number(numbt);
						dict['ms'][fname.split("[")[0]]['type'] = 'number';
						continue;
						} else {
						if (valobj.value.replace("+"," + ").length !== valobj.value.length || valobj.value.replace("-"," - ").length !== valobj.value.length || valobj.value.replace("/"," / ").length !== valobj.value.length || valobj.value.replace("*"," * ").length !== valobj.value.length) {
							let exp1 = valobj.value.replace(/\+/gim," + ").replace(/\-/gim," - ").replace(/\*/gim," * ").replace(/\//gim," / ").replace(/\(/gim," ( ").replace(/\)/gim," ) ").split(" ");
							let exp = [];
							for(let expi = 0; expi<exp1.length;expi++) {
								if (exp1[expi] !== "") {
									exp.push(exp1[expi]);
								}
							}
							for(let ep=0; ep < exp.length;ep++) {
								try {
								if (exp[ep] !== "*" && exp[ep] !== "/" && exp[ep] !== "+" && exp[ep] !== "-" && exp[ep] !== "(" && exp[ep] !== ")" && exp[ep] !== ".repeat(") {
									if (typeof exp[ep] === 'string' && exp[ep].replace(/\"/gim,"").length !== exp[ep].length && exp[ep+1] === "*") {
											exp[ep+1] = ".repeat(";
											//console.log("aasas");
											exp.splice(ep+3,0,")");
										}
									if (Number(exp[ep])) {
										exp[ep] = Number(exp[ep])
										continue;
									} else if(dict['ms'][exp[ep].split('[')[0]] && exp[ep].split('[').length === 1) {
										//console.log(exp[ep]);
										if (dict['ms'][exp[ep].split('[')[0]]['type'] !== "string") {
										exp[ep] = dict['ms'][exp[ep].split('[')[0]]['value'];
									} else {
										stringsum = true;
										///console.log(stringsum);
										exp[ep] = '"' + dict['ms'][exp[ep].split('[')[0]]['value'] + '"';
									}
									} else if (dict['ms'][exp[ep].split('[')[0]] && exp[ep].split('[').length !== 1)  {let ep2 = ep;
												while(exp[ep2].replace(/\[/gim,"").length !== exp[ep2].replace(/\]/gim,"").length) {
													exp[ep2] += exp[ep2+1];
													
													exp.splice(ep2+1,1);
													

												}
												//console.log(expv(exp[ep].split('[')[1].replace("]","")));
												//exp[ep] = dict['ms'][exp[ep].split('[')[0]]['value'][Number(dict['ms'][exp[ep].split('[')[1].replace("]","")]['value'])-1];
												exp[ep] = dict['ms'][exp[ep].split('[')[0]]['value'][expv(exp[ep].split('[')[1].replace("]",""))-1];
												ep--;}
								}
							}catch(err){

							}
							}
							exp = exp.join('');
							try {
							eval("dict['ms']['"+fname+"']['value'] = "+exp.replace(/&%5/gim, "+").replace(/&%6/gim, "-").replace(/&%7/gim, "*").replace(/&%8/gim, "/").replace(/&%s0/gim, " "));
							if (stringsum === false) {
								dict['ms'][fname.split("[")[0]]['type'] = 'number';
							} else {
							dict['ms'][fname.split("[")[0]]['type'] = 'string'
						} } catch(err)  {
							console.log("ERR: Something bad on line " + i);

						}
							//eval("console.log("+ exp + ");")
							//console.log(exp);

						}
						}
					}
						} else if(valobj.value.replace(/"/gim, '').length !== valobj.value.length && valobj.value.split('+').length === 1 && valobj.value.split('-').length === 1 && valobj.value.split('*').length === 1 && valobj.value.split('/').length === 1) {

													dict['ms'][fname.split("[")[0]]['value'] = valobj.value.replace(/"/gim, '').replace(/&%2/gim,'"').replace(/&%5/gim, "+").replace(/&%6/gim, "-").replace(/&%7/gim, "*").replace(/&%8/gim, "/");
						dict['ms'][fname.split("[")[0]]['type'] = 'string';
					} else if(valobj.value.replace(/"/gim, '').length !== valobj.value.length && (valobj.value.split('+').length !== 1 || valobj.value.split('-').length !== 1 || valobj.value.split('*').length !== 1 || valobj.value.split('/').length !== 1)) {
						//console.log(Number(valobj.value));
						//console.log(valobj.value);
						let numbt = "";
						//console.log("РАБОТАЕТ ДЛИННЫЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙ ИФ");
						try {
						eval("numbt ="+valobj.value);

					} catch(err) {

					}

						//console.log(numbt);
						
						if (valobj.value.replace("+"," + ").length !== valobj.value.length || valobj.value.replace("-"," - ").length !== valobj.value.length || valobj.value.replace("/"," / ").length !== valobj.value.length || valobj.value.replace("*"," * ").length !== valobj.value.length) {
							var result = valobj.value.replace(/"[^"]+"/g, function (match) {
    return match.replace(/ /g, '&%s0');
});
	valobj.value = result;
	//console.log(valobj.value);

							
							let exp1 = valobj.value.replace(/\+/gim," + ").replace(/\-/gim," - ").replace(/\*/gim," * ").replace(/\//gim," / ").replace(/\(/gim," ( ").replace(/\)/gim," ) ").split(" ");//console.log(exp1);
							let exp = [];
							for(let expi = 0; expi<exp1.length;expi++) {
								if (exp1[expi] !== "") {
									exp.push(exp1[expi]);
								}
							}
							for(let ep=0; ep < exp.length;ep++) {
								try {
								if (exp[ep] !== "*" && exp[ep] !== "/" && exp[ep] !== "+" && exp[ep] !== "-" && exp[ep] !== "(" && exp[ep] !== ")" && exp[ep] !== ".repeat(") {
									if (typeof exp[ep] === 'string'  && exp[ep].replace(/\"/gim,"").length !== exp[ep].length && exp[ep+1] === "*") {
											exp[ep+1] = ".repeat(";
											//console.log("aasas");
											exp.splice(ep+3,0,")");
										}

									if (Number(exp[ep])) {
										exp[ep] = Number(exp[ep])
										continue;
									} else if(dict['ms'][exp[ep].split('[')[0]] && exp[ep].split('[').length === 1) {
										if (dict['ms'][exp[ep].split('[')[0]]['type'] !== "string") {
										exp[ep] = dict['ms'][exp[ep].split('[')[0]]['value'];
									} else {
										exp[ep] = '"' + dict['ms'][exp[ep].split('[')[0]]['value'] + '"';
										
									}
									} else if (dict['ms'][exp[ep].split('[')[0]] && exp[ep].split('[').length !== 1)  {let ep2 = ep;
												while(exp[ep2].replace(/\[/gim,"").length !== exp[ep2].replace(/\]/gim,"").length) {
													exp[ep2] += exp[ep2+1];
													
													exp.splice(ep2+1,1);
													

												}
												//console.log(expv(exp[ep].split('[')[1].replace("]","")));
												//exp[ep] = dict['ms'][exp[ep].split('[')[0]]['value'][Number(dict['ms'][exp[ep].split('[')[1].replace("]","")]['value'])-1];
												exp[ep] = dict['ms'][exp[ep].split('[')[0]]['value'][expv(exp[ep].split('[')[1].replace("]",""))-1];
												ep--;}






								}
							} catch(err) {

							}
							}
							//console.log(exp);
							exp = exp.join('');
							//console.log(exp);
							try {
							eval("dict['ms']['"+fname+"']['value'] = "+exp.replace(/&%5/gim, "+").replace(/&%6/gim, "-").replace(/&%7/gim, "*").replace(/&%8/gim, "/").replace(/&%s0/gim, " "));
						} catch(err) {
							console.log("ERR: Something bad on line " + i);

						}
							dict['ms'][fname]['type'] = 'string'
							//eval("console.log("+ exp + ");")
							//console.log(exp);

						}
						
					}
					} else if(dict['ms'][fname.split("[")[0]]['status'] === 'array') {
						if(fname.split("[").length === 1) {
							try{

								if (valobj.value.split('+').length !== 1 || valobj.value.split('-').length !== 1 || valobj.value.split('*').length !== 1 || valobj.value.split('/').length !== 1) {
									dict['ms'][fname.split("[")[0]]['status'] = "var";

						//console.log(Number(valobj.value));
						//console.log(valobj.value);
						let numbt = "";

						try {
						eval("numbt ="+valobj.value);

					} catch(err) {
					//console.log(err);
					}

						let stringsum = false;
						if (!/\"(.*)\"/gim.test(valobj.value)) {
						if (Number(numbt)) {
							dict['ms'][fname.split("[")[0]]['value'] = Number(numbt);
						dict['ms'][fname.split("[")[0]]['type'] = 'number';
						continue;
						}
					}

						 
						if (valobj.value.replace("+"," + ").length !== valobj.value.length || valobj.value.replace("-"," - ").length !== valobj.value.length || valobj.value.replace("/"," / ").length !== valobj.value.length || valobj.value.replace("*"," * ").length !== valobj.value.length) {
							var result = valobj.value.replace(/"[^"]+"/g, function (match) {
    return match.replace(/ /g, '&%s0');
});
	valobj.value = result;
							let exp1 = valobj.value.replace(/\+/gim," + ").replace(/\-/gim," - ").replace(/\*/gim," * ").replace(/\//gim," / ").replace(/\(/gim," ( ").replace(/\)/gim," ) ").split(" ");
							let exp = [];
							//console.log(exp1);
							for(let expi = 0; expi<exp1.length;expi++) {
								if (exp1[expi] !== "") {
									exp.push(exp1[expi]);
								}
							}
							for(let ep=0; ep < exp.length;ep++) {
								try {
								if (exp[ep] !== "*" && exp[ep] !== "/" && exp[ep] !== "+" && exp[ep] !== "-" && exp[ep] !== "(" && exp[ep] !== ")" && exp[ep] !== ".repeat(") {
									if (typeof exp[ep] === 'string'  && exp[ep].replace(/\"/gim,"").length !== exp[ep].length && exp[ep+1] === "*") {
											exp[ep+1] = ".repeat(";
											//console.log("aasas");
											exp.splice(ep+3,0,")");
										}
									//console.log(exp[ep]);
									if (Number(exp[ep])) {

										exp[ep] = Number(exp[ep])
										continue;
									} else if(dict['ms'][exp[ep].split('[')[0]] && exp[ep].split('[').length === 1) {
										//console.log(exp[ep]);
										if (dict['ms'][exp[ep].split('[')[0]]['type'] !== "string") {
										exp[ep] = dict['ms'][exp[ep].split('[')[0]]['value'];
									} else {
										stringsum = true;
										///console.log(stringsum);
										exp[ep] = '"' + dict['ms'][exp[ep].split('[')[0]]['value'] + '"';
									}
									} else if (dict['ms'][exp[ep].split('[')[0]] && exp[ep].split('[').length !== 1)  {let ep2 = ep;
												while(exp[ep2].replace(/\[/gim,"").length !== exp[ep2].replace(/\]/gim,"").length) {
													exp[ep2] += exp[ep2+1];
													
													exp.splice(ep2+1,1);
													

												}
												//console.log(expv(exp[ep].split('[')[1].replace("]","")));
												//exp[ep] = dict['ms'][exp[ep].split('[')[0]]['value'][Number(dict['ms'][exp[ep].split('[')[1].replace("]","")]['value'])-1];
												exp[ep] = dict['ms'][exp[ep].split('[')[0]]['value'][expv(exp[ep].split('[')[1].replace("]",""))-1];
												ep--;}
								}
							}catch(err){

							}
							}
							exp = exp.join('');
							try {
							eval("dict['ms']['"+fname+"']['value'] = "+exp.replace(/&%5/gim, "+").replace(/&%6/gim, "-").replace(/&%7/gim, "*").replace(/&%8/gim, "/").replace(/&%s0/gim, " "));
							
							if (typeof dict['ms'][fname]['value'] === "number") {
								dict['ms'][fname.split("[")[0]]['type'] = 'number';
							} else {
							dict['ms'][fname.split("[")[0]]['type'] = 'string'
						} } catch(err)  {
							console.log("ERR: Something bad on line " + i);
							//console.log(err);

						}
							//eval("console.log("+ exp + ");")
							//console.log(exp);

						}
						

								continue;
								}
								try {
								if (dict['ms'][valobj.value.split("[")[0]]) {
									//console.log('sTH');
									if (dict['ms'][valobj.value]['status'] === "const") {
										dict['ms'][fname]['value']=dict['ms'][valobj.value]['value'];
									dict['ms'][fname]['status']="var";
									dict['ms'][fname]['type']=dict['ms'][valobj.value]['type'];
									continue;
									}
									if(valobj.value.split("[").length === 1 && dict['ms'][valobj.value]['status'] !== 'array') {
									dict['ms'][fname]['value']=dict['ms'][valobj.value]['value'];
									dict['ms'][fname]['status']=dict['ms'][valobj.value]['status'];
									if (typeof dict['ms'][valobj.value]['type'] !== "undefined") {
									dict['ms'][fname]['type']=dict['ms'][valobj.value]['type'];
								}
								continue;
							} else if(valobj.value.split("[").length !== 1 && dict['ms'][valobj.value.split("[")[0]]['status'] === 'array'){

							if (Number(valobj.value.split('[')[1].replace("]","")) && dict['ms'][valobj.value.split('[')[0]]['status'] === "array") {
								dict['ms'][fname.split("[")[0]]['value'] =dict['ms'][valobj.value.split('[')[0]]['value'][Number(valobj.value.split('[')[1].replace("]",""))-1]
								dict['ms'][fname.split("[")[0]]['status'] = 'var';
								//console.log(Array.isArray(dict['ms'][valobj.value.split('[')[0]]['value'][Number(valobj.value.split('[')[1].replace("]",""))-1]));
								if (Array.isArray(dict['ms'][valobj.value.split('[')[0]]['value'][Number(valobj.value.split('[')[1].replace("]",""))-1]) === true) {
									dict['ms'][fname.split("[")[0]]['status'] = 'array';
									dict['ms'][fname.split("[")[0]]['type'] = undefined;
								}
								if (typeof dict['ms'][fname.split("[")[0]]['value'] === "string") {
								dict['ms'][fname.split("[")[0]]['type'] = "string";
							} else if (typeof dict['ms'][fname.split("[")[0]]['value'] === "number") {
								dict['ms'][fname.split("[")[0]]['type'] = "number";
							}

							} else if(!Number(valobj.value.split('[')[1].replace("]","")) && dict['ms'][valobj.value.split('[')[0]]['status'] === "array") {
								dict['ms'][fname.split("[")[0]]['value'] =dict['ms'][valobj.value.split('[')[0]]['value'][Number(dict['ms'][valobj.value.split('[')[1].replace("]","")]['value'])-1]
								dict['ms'][fname.split("[")[0]]['status'] = 'var';
								if (Array.isArray(dict['ms'][valobj.value.split('[')[0]]['value'][Number(dict['ms'][valobj.value.split('[')[1].replace("]","")]['value'])-1]) === true) {
									dict['ms'][fname.split("[")[0]]['status'] = 'array';
									dict['ms'][fname.split("[")[0]]['type'] = undefined;
								}
								if (typeof dict['ms'][fname.split("[")[0]]['value'] === "string") {
								dict['ms'][fname.split("[")[0]]['type'] = "string";
							} else if (typeof dict['ms'][fname.split("[")[0]]['value'] === "number") {
								dict['ms'][fname.split("[")[0]]['type'] = "number";
							}
							}
							continue;
						
							}
						}
					} catch(err1) {

					}
								

								if (valobj.value.replace('&$=numb=','').length === valobj.value.length){
									eval("dict['ms']['"+fname+"']['value'] = "+valobj.value);
									if(Array.isArray(dict['ms'][fname]['value']) === true) {

									}else {
									eval("dict['ms']['"+fname+"']['status'] = 'var'");
									eval("dict['ms']['"+fname+"']['type'] = 'string'");
								}
									continue;
								} else if (valobj.value.replace('&$=numb=','').length !== valobj.value.length) {
									//console.log(valobj.value.replace('&$=numb=','').length !== valobj.value.length);
									eval("dict['ms']['"+fname+"']['value'] = " + Number(valobj.value.replace('&$=numb=','')));
									eval("dict['ms']['"+fname+"']['status'] = 'var'");
									eval("dict['ms']['"+fname+"']['type'] = 'number'");
									continue;
								}
							
								let evt;
								//consoe.log(valobj.value.replace('&$=numb=','').length !== valobj.value.length);l
								eval("evt = " + valobj.value);
								 if (Array.isArray(evt) === true) {
									//console.log(evt);
									dict['ms'][fname]['value'] = evt;
									//eval("dict['ms']['"+fname+"']['value'] = " + evt);
									
									
								}
							
						} catch(err) {
							let ia = Number(i);
							ia++;
							console.log("Error with array value! Line(Function №): " + ia);
							//console.log(err);
						}
						} else {
							try {
								//console.log(expv(fname.split("[")[1].replace(']', '')));
								if (expv(fname.split("[")[1].replace(']', ''))) {

									let numbf = expv(fname.split("[")[1].replace(']', ''))-1;
									//console.log(numbf);
									
									/*if (valobj.value.split('+').length !== 1 || valobj.value.split('-').length !== 1 || valobj.value.split('*').length !== 1 || valobj.value.split('/').length !== 1) {
									//dict['ms'][fname.split("[")[0]]['status'] = "var";
									//console.log();
						//console.log(Number(valobj.value));
						//console.log(valobj.value);
						let numbt = "";

						try {
						eval("numbt ="+valobj.value);

					} catch(err) {
					//console.log(err);
					}

						let stringsum = false;
						if (!/\"(.*)\"/gim.test(valobj.value)) {
						if (Number(numbt)) {
							dict['ms'][fname.split("[")[0]]['value'] = Number(numbt);
						dict['ms'][fname.split("[")[0]]['type'] = 'number';
						continue;
						}
					}

						
						if (valobj.value.replace("+"," + ").length !== valobj.value.length || valobj.value.replace("-"," - ").length !== valobj.value.length || valobj.value.replace("/"," / ").length !== valobj.value.length || valobj.value.replace("*"," * ").length !== valobj.value.length) {
							var result = valobj.value.replace(/"[^"]+"/g, function (match) {
    return match.replace(/ /g, '&%s0');
});
	valobj.value = result;
							let exp1 = valobj.value.replace(/\+/gim," + ").replace(/\-/gim," - ").replace(/\*//*gim," * ").replace(/\//gim," / ").replace(/\(/gim," ( ").replace(/\)/gim," ) ").split(" ");
							let exp = [];
							//console.log(exp1);
							for(let expi = 0; expi<exp1.length;expi++) {
								if (exp1[expi] !== "") {
									exp.push(exp1[expi]);
								}
							}
							for(let ep=0; ep < exp.length;ep++) {
								try {
								if (exp[ep] !== "*" && exp[ep] !== "/" && exp[ep] !== "+" && exp[ep] !== "-" && exp[ep] !== "(" && exp[ep] !== ")" && exp[ep] !== ".repeat(") {
									if (typeof exp[ep] === 'string'  && exp[ep].replace(/\"/gim,"").length !== exp[ep].length && exp[ep+1] === "*") {
											exp[ep+1] = ".repeat(";
											//console.log("aasas");
											exp.splice(ep+3,0,")");
										}
									//console.log(exp[ep]);
									if (Number(exp[ep])) {

										exp[ep] = Number(exp[ep])
										continue;
									} else if(dict['ms'][exp[ep].split('[')[0]] && exp[ep].split('[').length === 1) {
										//console.log(exp[ep]);
										if (dict['ms'][exp[ep].split('[')[0]]['type'] !== "string") {
										exp[ep] = dict['ms'][exp[ep].split('[')[0]]['value'];
									} else {
										stringsum = true;
										///console.log(stringsum);
										exp[ep] = '"' + dict['ms'][exp[ep].split('[')[0]]['value'] + '"';
									}
									} else if (dict['ms'][exp[ep].split('[')[0]] && exp[ep].split('[').length !== 1)  {let ep2 = ep;
												while(exp[ep2].replace(/\[/gim,"").length !== exp[ep2].replace(/\]/gim,"").length) {
													exp[ep2] += exp[ep2+1];
													
													exp.splice(ep2+1,1);
													

												}
												//console.log(expv(exp[ep].split('[')[1].replace("]","")));
												//exp[ep] = dict['ms'][exp[ep].split('[')[0]]['value'][Number(dict['ms'][exp[ep].split('[')[1].replace("]","")]['value'])-1];
												exp[ep] = dict['ms'][exp[ep].split('[')[0]]['value'][expv(exp[ep].split('[')[1].replace("]",""))-1];
												ep--;}
								}
							}catch(err){

							}
							}
							exp = exp.join('');
							try {
							eval("dict['ms']['"+fname.split("[")[0]+"']['value']["+numbf+"] = "+exp.replace(/&%5/gim, "+").replace(/&%6/gim, "-").replace(/&%7/gim, "*").replace(/&%8/gim, "/").replace(/&%s0/gim, " "));
							//console.log();
							//console.log(stringsum);
							
						} catch(err)  {
							console.log("ERR: Something bad on line " + i);
							//console.log(err);
							
						}
							//eval("console.log("+ exp + ");")
							//console.log(exp);

						}
					
						

								continue;
								

}*/
									if (dict['ms'][valobj.value.split("[")[0]]) {
										if(valobj.value.split("[").length !== 1 && dict['ms'][valobj.value.split("[")[0]]['status'] === 'array'){


							if (Number(valobj.value.split('[')[1].replace("]","")) && dict['ms'][valobj.value.split('[')[0]]['status'] === "array") {
								dict['ms'][fname.split("[")[0]]['value'][numbf] =dict['ms'][valobj.value.split('[')[0]]['value'][Number(valobj.value.split('[')[1].replace("]",""))-1]

							} else if(!Number(valobj.value.split('[')[1].replace("]","")) && dict['ms'][valobj.value.split('[')[0]]['status'] === "array") {
								dict['ms'][fname.split("[")[0]]['value'][numbf] =dict['ms'][valobj.value.split('[')[0]]['value'][Number(dict['ms'][valobj.value.split('[')[1].replace("]","")]['value'])-1]
								
							}
							continue;

}
										dict['ms'][fname.split("[")[0]]['value'][Number(numbf)] = dict['ms'][valobj.value]['value'];
									} else if(valobj.value.replace('&$=numb=','').length === valobj.value.length) {
							eval("dict['ms']['"+fname.split("[")[0]+"']['value']["+ Number(numbf) +"] = " + valobj.value);
						} else if (valobj.value.replace('&$=numb=','').length !== valobj.value.length) {
							eval("dict['ms']['"+fname.split("[")[0]+"']['value']["+ Number(numbf) +"] = " + Number(valobj.value.replace('&$=numb=','')));
						}
						} else {
							//console.log('a');
							eval("dict['ms']['"+fname.split("[")[0]+"']['value']["+ number() +"] = " + valobj.value);
						}
						} catch(err) {
							//console.log(err);
							//console.log('ad');
							if (dict['ms'][fname.split("[")[1].replace(']', '')]) {

								if (dict['ms'][fname.split("[")[1].replace(']', '')]['type'] === 'number') {
								try {
									numbf = dict['ms'][fname.split("[")[1].replace(']', '')]['value'];
									if (valobj.value.split('+').length !== 1 || valobj.value.split('-').length !== 1 || valobj.value.split('*').length !== 1 || valobj.value.split('/').length !== 1) {

									//dict['ms'][fname.split("[")[0]]['status'] = "var";
									//console.log();
						//console.log(Number(valobj.value));
						//console.log(valobj.value);
						let numbt = "";

						try {
						eval("numbt ="+valobj.value);

					} catch(err) {
					//console.log(err);
					}

						let stringsum = false;
						if (!/\"(.*)\"/gim.test(valobj.value)) {
						if (Number(numbt)) {
							dict['ms'][fname.split("[")[0]]['value'] = Number(numbt);
						dict['ms'][fname.split("[")[0]]['type'] = 'number';
						continue;
						}
					}

						
						if (valobj.value.replace("+"," + ").length !== valobj.value.length || valobj.value.replace("-"," - ").length !== valobj.value.length || valobj.value.replace("/"," / ").length !== valobj.value.length || valobj.value.replace("*"," * ").length !== valobj.value.length) {
							var result = valobj.value.replace(/"[^"]+"/g, function (match) {
    return match.replace(/ /g, '&%s0');
});
	valobj.value = result;
							let exp1 = valobj.value.replace(/\+/gim," + ").replace(/\-/gim," - ").replace(/\*/gim," * ").replace(/\//gim," / ").replace(/\(/gim," ( ").replace(/\)/gim," ) ").split(" ");
							let exp = [];
							//console.log(exp1);
							for(let expi = 0; expi<exp1.length;expi++) {
								if (exp1[expi] !== "") {
									exp.push(exp1[expi]);
								}
							}
							for(let ep=0; ep < exp.length;ep++) {
								try {
								if (exp[ep] !== "*" && exp[ep] !== "/" && exp[ep] !== "+" && exp[ep] !== "-" && exp[ep] !== "(" && exp[ep] !== ")" && exp[ep] !== ".repeat(") {
									if (typeof exp[ep] === 'string' && exp[ep].replace(/\"/gim,"").length !== exp[ep].length && exp[ep+1] === "*") {
										//console.log(exp);
											exp[ep+1] = ".repeat(";
											//console.log("aasas");
											exp.splice(ep+3,0,")");
										}
									//console.log(exp[ep]);
									if (Number(exp[ep])) {

										exp[ep] = Number(exp[ep])
										continue;
									} else if(dict['ms'][exp[ep].split('[')[0]] && exp[ep].split('[').length === 1) {
										//console.log(exp[ep]);
										if (dict['ms'][exp[ep].split('[')[0]]['type'] !== "string") {
										exp[ep] = dict['ms'][exp[ep].split('[')[0]]['value'];
									} else {
										stringsum = true;
										///console.log(stringsum);
										exp[ep] = '"' + dict['ms'][exp[ep].split('[')[0]]['value'] + '"';
									}
									} else if (dict['ms'][exp[ep].split('[')[0]] && exp[ep].split('[').length !== 1)  {let ep2 = ep;
												while(exp[ep2].replace(/\[/gim,"").length !== exp[ep2].replace(/\]/gim,"").length) {
													exp[ep2] += exp[ep2+1];
													
													exp.splice(ep2+1,1);
													

												}
												//console.log(expv(exp[ep].split('[')[1].replace("]","")));
												//exp[ep] = dict['ms'][exp[ep].split('[')[0]]['value'][Number(dict['ms'][exp[ep].split('[')[1].replace("]","")]['value'])-1];
												exp[ep] = dict['ms'][exp[ep].split('[')[0]]['value'][expv(exp[ep].split('[')[1].replace("]",""))-1];
												ep--;}
								}
							}catch(err){

							}
							}
							//console.log(exp);
							exp = exp.join('');

							try {
								numbf = Number(numbf)-1;
							eval("dict['ms']['"+fname.split("[")[0]+"']['value']["+numbf+"] = "+exp.replace(/&%5/gim, "+").replace(/&%6/gim, "-").replace(/&%7/gim, "*").replace(/&%8/gim, "/").replace(/&%s0/gim, " "));
							//console.log();
							//console.log(stringsum);
							
						} catch(err)  {
							console.log("ERR: Something bad on line " + i);
							//console.log(err);
						}
							//eval("console.log("+ exp + ");")
							//console.log(exp);

						}
					
						

								continue;
								


}
									if (dict['ms'][valobj.value.split("[")[0]]) {
										//numbf = dict['ms'][fname.split("[")[1].replace(']', '')]['value'];
										if(valobj.value.split("[").length !== 1 && dict['ms'][valobj.value.split("[")[0]]['status'] === 'array'){


							if (Number(valobj.value.split('[')[1].replace("]","")) && dict['ms'][valobj.value.split('[')[0]]['status'] === "array") {
								dict['ms'][fname.split("[")[0]]['value'][numbf] =dict['ms'][valobj.value.split('[')[0]]['value'][Number(valobj.value.split('[')[1].replace("]",""))-1]

							} else if(!Number(valobj.value.split('[')[1].replace("]","")) && dict['ms'][valobj.value.split('[')[0]]['status'] === "array") {
								dict['ms'][fname.split("[")[0]]['value'][numbf] =dict['ms'][valobj.value.split('[')[0]]['value'][Number(dict['ms'][valobj.value.split('[')[1].replace("]","")]['value'])-1]
								
							}
							continue;

}
										dict['ms'][fname.split("[")[0]]['value'][Number(dict['ms'][fname.split("[")[1].replace(']', '')]['value']-1)] = dict['ms'][valobj.value]['value'];
									} else if(valobj.value.replace('&$=numb=','').length === valobj.value.length) {
							eval("dict['ms']['"+fname.split("[")[0]+"']['value']["+ Number(dict['ms'][fname.split("[")[1].replace(']', '')]['value']-1) +"] = " + valobj.value);
						} else if (valobj.value.replace('&$=numb=','').length !== valobj.value.length) {
							eval("dict['ms']['"+fname.split("[")[0]+"']['value']["+ Number(dict['ms'][fname.split("[")[1].replace(']', '')]['value']-1) +"] = " + Number(valobj.value.replace('&$=numb=','')));
						}
								//eval("dict['ms']['"+fname.split("[")[0]+"']['value']["+Number(dict['ms'][fname.split("[")[1].replace(']', '')]['value']-1) +"] = " + valobj.value);
							} catch(err) {
								let ia = Number(i);
							ia++;
							console.log("Error with array value! Line: " + ia);

							}
						}
							} else {
							let ia = Number(i);
							ia++;
							console.log("Error with array value! Line: " + ia);
							//console.log(err);
							//console.log(valobj.value);
						}
							//console.log(err);
						}
							
							
						}
						

					}
				} else {
					if (fname.split("[")[0] !== "") {
						
					if (fname.substring(0,8).toLowerCase() !== "constant") {
					dict['ms'][fname.split("[")[0]] = {};
				}
					let arrt;
					try {
					eval("arrt = "+valobj.value);
				//	console.log(arrt);
				} catch(err){
					arrt = false;
				}


					if (Array.isArray(arrt) === false && fname.substring(0,8).toLowerCase() !== "constant") {
					dict['ms'][fname.split("[")[0]]['status'] = "var";

					dict['ms'][fname.split("[")[0]]['value'] = "";
					dict['ms'][fname.split("[")[0]]['type'] = "string";
					i--;
					} else if (Array.isArray(arrt) === true && fname.substring(0,8).toLowerCase() !== "constant")  {
						dict['ms'][fname.split("[")[0]]['status'] = "array";
						dict['ms'][fname.split("[")[0]]['value'] = arrt;

						continue;
						i--;
						//console.log(arrt)
					}
					if (fname.substring(0,8).toLowerCase() === "constant" && !dict['ms'][fname.replace(fname.substring(0,9),"")]) {
					
						if (Array.isArray(arrt) === false) {
							fname = fname.replace(fname.substring(0,9),"");
							//console.log(valobj.value);
							let value = expv(valobj.value.replace("&$=numb=",""));
							
							//console.log(value);
							//console.log(lcode);
							if (typeof value === "string") {
								//value = value.substring(1,value.length-1);
								//console.log(typeof value);
								dict['ms'][fname] = {};
								dict['ms'][fname]['status'] = "const";
								dict['ms'][fname]['value'] = value;
								//console.log(value);
								dict['ms'][fname]['type'] = "string";
								continue;
								//console.log(fname);
							} else if (typeof value === "number")  {
								dict['ms'][fname] = {};
								dict['ms'][fname]['status'] = "const";
								dict['ms'][fname]['value'] = value;

								dict['ms'][fname]['type'] = "number";
								continue;
							}

						} else {
							console.log("ERROR: Constant can't be array.");
							continue;
						}
						
						continue;
					}
					//console.log(lcode[i]);
					
				}
				}
			}
				//end var
			}
				if(checked = 0) {
				//console.log("Oh shit, one of your function(\""+fname+"\") not registred! Recheck your code!");
				
				 }

				 }
				 } //unknown type
			
			} else {
		//console.log("Maybe you wanna type some code, dude?)");
		//console.log(lcode);
	}
	
	
		//console.error("Array of lexems is empty!");

};
module.exports.parser = parser;