let lexer = function (content, dict) {
	let unsorted = content.replace(/\s\s+/gm, " ");
	let lowsorted = unsorted.split(';');
	let lcode = [];
	for(let i=0; i<lowsorted.length; i++) {

		let lsline = lowsorted[i].trim();
		//console.log(lsline);
		if(!lsline == "") {
			
			let lssort = lsline.split(" ");
			//console.log();
			let scode = {};
			let lslinec = lsline;
			let com = lssort[0];
			let cval = lslinec.replace(/*new RegExp(com + ' : ',"g")*/com + " : ","");
			//console.log(cval);

			if (dict["function"][com.toLowerCase()]) {

				if(lssort[0] === "var") {
					Object.assign(scode, {
				"vars" : cval + " "});
				
				
				};
				if (lssort[0] === "if") {

					let pzd = cval.split(/\s(?=(?:[^'"`]*(['"`])[^'"`]*\1)*[^'"`]*$)/gm);
					let pzd2 = [];
					for(let ii = 0;ii < pzd.length; ii++){
						if(pzd[ii] !== '"' && typeof pzd[ii] !== "undefined") {
							pzd2.push(pzd[ii]);
						}
					}
					//console.log(cval);
					//console.log(pzd);

					Object.assign(scode, {
				"fvar" : pzd2[0],
				"znak" : pzd2[1],
				"svar" : pzd2[2],
				//"start" : pzd[3],
				"code" : cval,
				"spcode" : pzd2

			});
				}

				if (lssort[0] === "while") {
					let pzd = cval.split(/\s(?=(?:[^'"`]*(['"`])[^'"`]*\1)*[^'"`]*$)/gm);
					let pzd2 = [];
					for(let ii = 0;ii < pzd.length; ii++){
						if(pzd[ii] !== '"' && typeof pzd[ii] !== "undefined") {
							pzd2.push(pzd[ii]);
						}
					}
					//console.log(cval);

					Object.assign(scode, {
				"fvar" : pzd2[0],
				"znak" : pzd2[1],
				"svar" : pzd2[2],
				//"start" : pzd[3],
				"code" : cval,
				"spcode" : pzd2

			});
				}
				if (lssort[0] === "for") {
					let pzd = cval.split(/\s(?=(?:[^'"`]*(['"`])[^'"`]*\1)*[^'"`]*$)/gm);
					let pzd2 = [];
					for(let ii = 0;ii < pzd.length; ii++){
						if(pzd[ii] !== '"' && typeof pzd[ii] !== "undefined") {
							pzd2.push(pzd[ii]);
						}
					}
					//console.log(cval);

					Object.assign(scode, {
				"fvar" : pzd2[0],
				"znak" : pzd2[1],
				"svar" : pzd2[2],
				//"start" : pzd[3],
				"code" : cval,
				"spcode" : pzd2

			});
					//console.log("smth");
				}

				Object.assign(scode, {"function":com});
				//console.log(com);
				//console.log(cval);
			} else {
				
				Object.assign(scode, {"unknown type":com});
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
			if (lssort[0] !== "range" && lssort[0] !== "clrscr" && lssort[0] !== "vas" && lssort[0] !== "while") {
				if (lssort[0] !== "arr" && lssort[0] !== "for") {
				Object.assign(scode, { 
								"value" : {
									"type" : "var",
									"value" : cval
								}}); } } } 
								if (lssort[0] ==="var"){
								Object.assign(scode, { 
								"value" : {
									"type" : "underfined",
									"value" : ""
								}}); }
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
									Object.assign(scode, { 
										"value" : {
									"type" : "array",
									"value" : cval
								},
								"arrname" : cval,
								"arr": []
							});
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

