
let lexer = function (content, dict) {
	let main = dict['main'];
//	if (dict['main'] === true) {
//		main = true;
///	dict['main'] = false;
//		console.log(dict['main']);
//	}
	//console.log(main);
	let unsorted = content.replace(/\s\s+/gm, " ");
	var result = unsorted.replace(/"[^"]+"/g, function (match) {
    return match.replace(/,/g, '&%0');
}); 
	unsorted = result;
	result = unsorted.replace(/"[^"]+"/g, function (match) {
    return match.replace(/;/g, '&%1');
});
	unsorted = result;
	result = unsorted.replace(/"[^"]+"/g, function (match) {
    return match.replace(/\+/g, '&%5');
});
	unsorted = result;
	result = unsorted.replace(/"[^"]+"/g, function (match) {
    return match.replace(/\-/g, '&%6');
});
	unsorted = result;
	result = unsorted.replace(/"[^"]+"/g, function (match) {
    return match.replace(/\*/gim, '&%7');
});
	unsorted = result;
	result = unsorted.replace(/&dq/gim, '"');
	unsorted = result;
	result = unsorted.replace(/"[^"]+"/g, function (match) {
    return match.replace(/\//g, '&%8');
});
	unsorted = result;
	//console.log(result);
	result = unsorted.replace(/"[^"]+"/g, function (match) {
    return match.replace(/\:/g, '&%4');
});
	unsorted = result;
	result = unsorted.replace(/"[^"]+"/g, function (match) {
    return match.replace(/\(/g, '&%sk1o');
});
	unsorted = result;
	result = unsorted.replace(/"[^"]+"/g, function (match) {
    return match.replace(/\)/g, '&%sk1c');
});
	unsorted = result;
	//console.log(result);
	let lowsorted = unsorted.split(/;/gim);
	//console.log(lowsorted);
	let lcode = [];
	
	for(let i=0; i<lowsorted.length; i++) {

		let lsline = lowsorted[i].trim();
		//console.log(lsline);
		if(!lsline == "") {
			if (lsline[0] === "/" && lsline[1] === "/") {
				continue;
			}
			//console.log(lsline);
			//result = lsline.replace(/{[^{}]*\}/gim, function (match) {
  //  return match.replace(/:/g, '&%4');
//});
			/*result = result.replace(/{[^]+}/g, function (match) {
				console.log(match.replace(/:/g, '&%4'));
    return match.replace(/:/g, '&%4');
});*/		//result = result.replace(/if:/gim, "if :");
		//	result = result.replace(/if :/gim, "if &%4").replace("if &%4","if:");
			//console.log(result);
			let lssort = [];
			while(lsline.replace(/\(/gim,"").length !== lsline.replace(/\)/gim,"").length) {
					//console.log(unsorted);
					lsline += ";"+ lowsorted[i+1];
					lowsorted[i] = lsline;
					lowsorted.splice(i+1,1);
					
				//console.log(lowsorted.splice(i+1,i-1));
				//	console.log(lowsorted);
				}
				lsline = lsline.replace(/"[^"]+"/g, function (match) {
    return match.replace(/&%sk1o/g, '(');
});
	lsline = lsline.replace(/"[^"]+"/g, function (match) {
    return match.replace(/&%sk1c/g, ')');
});
			//	console.log(lsline);
			if (dict['rusfunction'][lsline.substring(0,9).toLowerCase()]) {
				lsline = lsline.replace(lsline.substring(0,9).toLowerCase(),dict['rusfunction'][lsline.substring(0,9).toLowerCase()]);
				//console.log(lsline);
			}
			if (dict['rusfunction'][lsline.substring(0,7).toLowerCase()]) {
				lsline = lsline.replace(lsline.substring(0,7).toLowerCase(),dict['rusfunction'][lsline.substring(0,7).toLowerCase()]);
				//console.log(lsline);
			}
			if (dict['rusfunction'][lsline.substring(0,11).toLowerCase()]) {
				lsline = lsline.replace(lsline.substring(0,11).toLowerCase(),dict['rusfunction'][lsline.substring(0,11).toLowerCase()]);
				//console.log(lsline);
			}
			if (lsline.substring(0,2).toLowerCase() === "if" || lsline.substring(0,5).toLowerCase() === "while" || lsline.substring(0,3).toLowerCase() === "for") {
				if (lsline.replace("&:&il").length === lsline.length) {
				lsline = lsline.replace(":","&:&il");
			}

				while(lsline.replace(/{/gim,"").length !== lsline.replace(/}/gim,"").length) {
					//console.log(unsorted);
					lsline += ", "+ lowsorted[i+1];
					lowsorted[i] = lsline;
					lowsorted.splice(i+1,1);
					
				//console.log(lowsorted.splice(i+1,i-1));
				//	console.log(lowsorted);
				}
				lssort = lsline.split("&:&il");
				//console.log(lsline);

			} else if (lsline.split("&:&il").length === 1) {
				if (lsline.substring(0,9).toLowerCase() === "##include") {
					lsline = lsline.replace("##include","##include :");
				}
				if (lsline.split("&:&il").length === 1 && lsline.substring(0,8).toLowerCase() !== "function" && lsline.substring(0,8).toLowerCase() !== "emulate(") {
				lssort = lsline.split(":");
			}
			if (lsline.substring(0,8).toLowerCase() === "function") {
				while(lsline.replace(/{/gim,"").length !== lsline.replace(/}/gim,"").length) {
					//console.log(unsorted);
					lsline += ", "+ lowsorted[i+1];
					lowsorted[i] = lsline.trim();
					lowsorted.splice(i+1,1);
					
				//console.log(lowsorted.splice(i+1,i-1));
				//	console.log(lowsorted);
				}
				lssort = ["function", lsline.replace("function ","").replace(/,/gim,", ").trim()];
				console.log(lssort);
				//console.log(lssort);

			}
			}
			if (lsline.substring(0,8).toLowerCase() === "emulate(") {
				lssort[0] = lsline;
			}
			if (lssort[0].toLowerCase().trim() === "range" && lssort.length === 2) {
				lssort[1] += ", " + lowsorted[i+1] + ", " + lowsorted[i+2];
				//console.log(lsline);
				lowsorted.splice(1,2);

			}
			//console.log(lsline.substring(0,7).toLowerCase());

		//	console.log(lsline);
			//console.log(result.replace(/{[^{}]*\}/gim, "gay"));
			//console.log(result);
			
			//console.log(lssort);
			for(let ia = 0;ia<lssort.length;ia++) {
				lssort[ia] = lssort[ia].trim().replace(/&%4/gim, ":");
				//console.log(lssort[ia]);
			}
			
				lssort[2] = lssort[1];
				//console.log(lssort[2]);
			
			//console.log(lssort);
			//console.log();
			let scode = {};
			
			let lslinec = lsline;
				//console.log(result);
			let com = lssort[0];
			if (dict['rusfunction'][com]) {
				com = dict['rusfunction'][com];
				lssort[0] = com;
			}
			//console.log(lsline.substring(0,9).toLowerCase());
			
			let cval = lssort[2];
			/*if (com.substring(0,4).toLowerCase() === "file") {
				let cval = lssort[2];
				com += ":" + cval;
			}*/
			//console.log(cval);

			if (dict["function"][com.toLowerCase()]) {
				lssort[0] = lssort[0].toLowerCase();
				//console.log(main);
 				if (lssort[0] === "end" && main === false) {
 					//console.log(main);
 					break;
				}
				//console.log(cval);
				if(lssort[0].toLowerCase() === "var" ) {
					if (!dict['ms'][cval]) {
					eval("Object.assign(dict['ms'], { " + cval+ ": { 'status' : 'var','value' : '', 'type' : 'string'}});");
				}

					
					//dict['ms'].push(dictobj);
					//console.log(dictobj);
					//console.log(dict);
					//lcode.push(scode);
					//console.log(lcode);

					
				
				
				};
				if (lssort[0] === "function") {
					let args = lssort[1].split(")")[0].split("(")[1];
					args = args.split(",");
					let ms ={};
					for(let at = 0;at<args.length;at++){
						args[at]= args[at].trim();
											}
					let afname = lssort[1].split(")")[0].split("(")[0].trim();
					dict["fms"][afname] = {
			"code" : "",
			"return" : "unknown",
			"return-value" : {
				"type" : "unknown",
				"value" : "unknown"
			},
			"args" : args
			
		};
		//console.log(dict["fms"]);
					//console.log(args);


				}








				if (lssort[0] === "if") {
					result = cval.replace(/"[^"]+"/g, function (match) {
    return match.replace(/{/gim, '&%a0').replace(/}/gim,"&%a1");
});
	cval = result;
	cval = cval.replace(/{/gim," { ").replace(/}/gim, " } ").replace("<"," < ").replace(">"," > ").replace("!="," &axmed& ").replace("="," = ").replace(" &axmed& "," != ");
					let pzd = cval.split(/\s(?=(?:[^'"`]*(['"`])[^'"`]*\1)*[^'"`]*$)/gm);
					//console.log(pzd);

					let pzd2 = [];
					for(let ii = 0;ii < pzd.length; ii++){
						if(pzd[ii] !== '"' && typeof pzd[ii] !== "undefined" && pzd[ii] !== "") {
							pzd2.push(pzd[ii]);
						}
					}

					
					while (pzd2[1] !== "<" && pzd2[1] !== ">" && pzd2[1] !== "=" && pzd2[1] !== "!=") {
						pzd2[0] = pzd2[0] + pzd2[1];
						pzd2.splice(1, 1);
						//console.log(pzd2);
						//break;
					}
					while(pzd2[3] !== "{"){
						pzd2[2] = pzd2[2] + pzd2[3];
						pzd2.splice(3, 1);
					}
					
					
					result = pzd2[0].replace(/"[^"]+"/g, function (match) {
    return match.replace(/&%a0/gim, '{').replace(/&%a1/gim,"}");
});
	pzd2[0] = result;
	result = pzd2[2].replace(/"[^"]+"/g, function (match) {
    return match.replace(/&%a0/gim, '{').replace(/&%a1/gim,"}");
});
	pzd2[2] = result;
	result = cval.replace(/"[^"]+"/g, function (match) {
    return match.replace(/&%a0/gim, '{').replace(/&%a1/gim,"}");
});
	cval = result;
	
					Object.assign(scode, {
				"fvar" : pzd2[0],
				"znak" : pzd2[1],
				"svar" : pzd2[2],
				//"start" : pzd[3],
				"code" : pzd2.join("").replace(/:/gim," : "),
				"spcode" : pzd2

			});
					//console.log(scode);
				}

				if (lssort[0] === "while") {
					result = cval.replace(/"[^"]+"/g, function (match) {
    return match.replace(/{/gim, '&%a0').replace(/}/gim,"&%a1");
});
	cval = result;
	cval = cval.replace(/{/gim," { ").replace(/}/gim, " } ").replace("<"," < ").replace(">"," > ").replace("!="," &axmed& ").replace("="," = ").replace(" &axmed& "," != ");
					let pzd = cval.split(/\s(?=(?:[^'"`]*(['"`])[^'"`]*\1)*[^'"`]*$)/gm);
					//console.log(pzd);

					let pzd2 = [];
					for(let ii = 0;ii < pzd.length; ii++){
						if(pzd[ii] !== '"' && typeof pzd[ii] !== "undefined" && pzd[ii] !== "") {
							pzd2.push(pzd[ii]);
						}
					}

					
					while (pzd2[1] !== "<" && pzd2[1] !== ">" && pzd2[1] !== "=" && pzd2[1] !== "!=") {
						pzd2[0] = pzd2[0] + pzd2[1];
						pzd2.splice(1, 1);
						//console.log(pzd2);
						//break;
					}
					while(pzd2[3] !== "{"){
						pzd2[2] = pzd2[2] + pzd2[3];
						pzd2.splice(3, 1);
					}
					
					
					result = pzd2[0].replace(/"[^"]+"/g, function (match) {
    return match.replace(/&%a0/gim, '{').replace(/&%a1/gim,"}");
});
	pzd2[0] = result;
	result = pzd2[2].replace(/"[^"]+"/g, function (match) {
    return match.replace(/&%a0/gim, '{').replace(/&%a1/gim,"}");
});
	pzd2[2] = result;
	result = cval.replace(/"[^"]+"/g, function (match) {
    return match.replace(/&%a0/gim, '{').replace(/&%a1/gim,"}");
});
	cval = result;
	
					Object.assign(scode, {
				"fvar" : pzd2[0],
				"znak" : pzd2[1],
				"svar" : pzd2[2],
				//"start" : pzd[3],
				"code" : pzd2.join("").replace(/:/gim," : "),
				"spcode" : pzd2

			});
					//console.log(scode);
				}
				if (lssort[0] === "for") {
					result = cval.replace(/"[^"]+"/g, function (match) {
    return match.replace(/{/gim, '&%a0').replace(/}/gim,"&%a1");
});
	cval = result;
	cval = cval.replace(/{/gim," { ").replace(/}/gim, " } ").replace("<"," < ").replace(">"," > ").replace("!="," &axmed& ").replace("="," = ").replace(" &axmed& "," != ");
					let pzd = cval.split(/\s(?=(?:[^'"`]*(['"`])[^'"`]*\1)*[^'"`]*$)/gm);
					//console.log(pzd);

					let pzd2 = [];
					for(let ii = 0;ii < pzd.length; ii++){
						if(pzd[ii] !== '"' && typeof pzd[ii] !== "undefined" && pzd[ii] !== "") {
							pzd2.push(pzd[ii]);
						}
					}

					
					while (pzd2[1] !== "<" && pzd2[1] !== ">" && pzd2[1] !== "=" && pzd2[1] !== "!=") {
						pzd2[0] = pzd2[0] + pzd2[1];
						pzd2.splice(1, 1);
						//console.log(pzd2);
						//break;
					}
					while(pzd2[3] !== "{"){
						pzd2[2] = pzd2[2] + pzd2[3];
						pzd2.splice(3, 1);
					}
					
					
					result = pzd2[0].replace(/"[^"]+"/g, function (match) {
    return match.replace(/&%a0/gim, '{').replace(/&%a1/gim,"}");
});
	pzd2[0] = result;
	result = pzd2[2].replace(/"[^"]+"/g, function (match) {
    return match.replace(/&%a0/gim, '{').replace(/&%a1/gim,"}");
});
	pzd2[2] = result;
	result = cval.replace(/"[^"]+"/g, function (match) {
    return match.replace(/&%a0/gim, '{').replace(/&%a1/gim,"}");
});
	cval = result;
	
					Object.assign(scode, {
				"fvar" : pzd2[0],
				"znak" : pzd2[1],
				"svar" : pzd2[2],
				//"start" : pzd[3],
				"code" : pzd2.join("").replace(/:/gim," : "),
				"spcode" : pzd2

			});
					//console.log(scode);
				}

				Object.assign(scode, {"function":com});
				//console.log(com);
				//console.log(cval);
			} else {
				
				Object.assign(scode, {"unknown type":com});

			}
			if (dict["file"][com.toLowerCase().split("(")[0]]) {
				//console.log(com.toLowerCase().split("(")[1].replace(")",""));
				let cva = com.toLowerCase().split("(")[1].replace(")","");
				if (cva[0].replace('"', '').length !== cva[0].length) {
				Object.assign(scode, {
					"filepath" : cva.split(",")[0].replace(/"/gim, ""),
					"var" : cva.split(",")[1]
				});
			} else {
				Object.assign(scode, {
					"filepath" : "$;;var$=" + cva.split(",")[0],
					
					"var" : cva.split(",")[1]
				});
			}
		}
			if (/\"(.*)\"/gim.test(cval)) {
				if (cval.length === 1) {
					Object.assign(scode, { 
						"value" : {
							"type" : "char",
							"value" : cval
						}});
				} else {
				// string
				if (lssort[0] !== "v&s") {
				Object.assign(scode, { 
						"value" : {
							"type" : "string",
							"value" : cval
						}  
					}); }
					if (lssort[0] === "v&s") {
									//console.log(cval);
									let all = cval.split(",");
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
									Object.assign(scode, { 
										"value" : {
									"type" : "undefined",
									"value" : cval,

								},
								"slot1" : a.trim(),
									"slot2" : b.trim(),
									"slot1var" : c,
									"slot2var" : c1,

								});
									
								}
								}   }
			}
			else {
				// number
				if (Number(cval)) {
					if (Number(cval) % 1 === 0) {
						if (Number(cval) > -2147483648 && Number(cval) < 2147483647) {
						Object.assign(scode, { 
								"value" : {
									"type" : "integer",
									"value" : Number(cval)
								}});
					} else{
						 if (Number(cval) > -9223372036854775808 && Number(cval) < 9223372036854775807) {
						Object.assign(scode, { 
								"value" : {
									"type" : "integer",
									"subtype" : "longint",
									"value" : Number(cval)
								}});  
					} else {
						Object.assign(scode, { 
								"value" : {
									"type" : "integer",
									"subtype" : "infinity",
									"value" : Number(cval)
								}});  
					}

				}
				}
					else {
						Object.assign(scode, { 
								"value" : {
									"type" : "float",
									"value" : Number(cval)
								}});  

					}
				
			} else {
				/*for(y=0; y<lcode.length; y++){
				
					if (scode.vars.name = cval ) {
				
					var vv = ''
					console.log(scode.vars.name);
					
					break;
			};
		} */
			

				  
		if (lssort[0] !== "var" && lssort[0] !== "if" && lssort[0] !== "//" && lssort[0] !== "input"){
			if (lssort[0] !== "range" && lssort[0] !== "clrscr" && lssort[0] !== "v&s" && lssort[0] !== "while") {
				if (lssort[0] !== "for") {
					
				Object.assign(scode, { 
								"value" : {
									"type" : "var",
									"value" : cval
								}}); 
			
			} } };
			
				if (lssort[0] === "var") {
					Object.assign(scode, { 
								"value" : {
									"type" : "undefined",
									"value" : cval
								}}); 
				}
								
								if (lssort[0] === "if") {
									Object.assign(scode, { 
								"value" : {
									"type" : "ifc",
									"value" : ""
								}});
								}
								if (lssort[0] === "while") {
									Object.assign(scode, { 
								"value" : {
									"type" : "whlc",
									"value" : ""
								}});
								}
								if (lssort[0] === "for") {
									Object.assign(scode, { 
								"value" : {
									"type" : "frc",
									"value" : ""
								}});
								}

								if (lssort[0] === "//") {
									Object.assign(scode, { 
								"value" : {
									"type" : "var",
									"value" : cval + ";"
								}});
								}
								if (lssort[0] === "input") {
									Object.assign(scode, { 
										"value" : {
									"type" : "underfined",
									"value" : cval
								},
								"varname" : lssort[2]
							});
									
									
								}
								if (lssort[0] === "arr") {
									/*Object.assign(scode, { 
										"value" : {
									"type" : "array",
									"value" : cval
								},
								"arrname" : cval,
								"arr": []
							});*/
								eval("Object.assign(dict['ms'], { " + cval+ ": { 'status' : 'array','value' : []}});");
								}
								if (lssort[0] === "clrscr") {
									Object.assign(scode, { 
										"value" : {
									"type" : "underfined",
									"value" : cval
								}}); };

									
									if (lssort[0] === "v&s") {
									//console.log(cval);
									let all = cval.split(",");
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
									Object.assign(scode, { 
										"value" : {
									"type" : "undefined",
									"value" : cval,

								},
								"slot1" : a.trim(),
									"slot2" : b.trim(),
									"slot1var" : true,
									"slot2var" : true
								});
									if(typeof all[2] !== "undefined"){
										Object.assign(scode, {
											"otv" : all[2].trim()
										});
									}

								}
								} 
								if (lssort[0] === "range") {
									let nvo = cval.split(",");
									if (typeof nvo[0] !== "undefined" && typeof nvo[1] !== "undefined" && typeof nvo[2] !== "undefined") {
									let min = nvo[0].trim();

									let max = nvo[1].trim();
									let varn = nvo[2].trim();
									Object.assign(scode, { 
										"value" : {
									"type" : "underfined",
									"value" : cval
								},
								"min" : min,
								"max" : max,
								"varname" : varn
								
							}); } else {
										Object.assign(scode, { 
										"value" : {
									"type" : "warn",
									"value" : cval,
									"warnl" : i+1
								}});


								};
								
								
							}
				

			}
			
		
			
		}
		lcode.push(scode);
		
		//console.log(scode);
	}
}
	return lcode;
};
module.exports.lexer = lexer;

