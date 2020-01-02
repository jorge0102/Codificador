
let code = new Array();
let voca = new Array("p", "h", 8, "D", "E", "$", "%", "F", "G", "H", "I", "J", "K", "L", "M",
"N", "Ñ", "/", "O", "w", "Q", 1, 2, 3, 4, "R", "S", "T", "U", 6, 7, "C", 9, 0, "V", "W", "X", "Y", "Z", "a", "b", "c",
"d", "e", "f", "g", "B", "i", "j", "k", "l", "m", "n", "ñ", "o", "A", "q", "r", "s",
"t", "u", "v", "P", ".", ",", ":", ";", "_", "-",  "x", "y", "z")


function encrip(click){
	
	let crip = document.getElementById("pantalla").value;	
	let y = crip.split("")
	
	for (let i = 0; i < y.length; i++){
		for (let j = 0; j < voca.length; j++){
			
			if (y[i] == voca[j]){
				code.push(i,j);
			}
		}
	}
	crip = "";
	y = "";
	document.getElementById("pantalla1").value = code
}

function desencript(click){
	
	let des = new Array();
	
	for (let i = 0; i < code.length; i++){
		if(i % 2 != 0){// solo indices impares
			let x = voca[code[i]];
			des.push(x);
		}
	}
	document.getElementById("pantalla1").value = des.join("");
	des = "";
	code = [];
}





