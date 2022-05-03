var input=document.querySelector("#TextoEntrada");
		var output=document.querySelector("#TextoSalida");
		var encriptarB=document.querySelector("#Encriptar");
		var desencriptarB=document.querySelector("#Desencriptar");
        var copiar=document.querySelector("#copiar");
		var texto_encriptado="";
		input.focus();
		function reestriccion(texto){
			var excluirNum=/\d/g;//var para identicar numumeros en el texto
			var excluirCarac=/\W/g;//var para identificar caracteres especiales en el texto
			if(texto.match(excluirNum)){
				alert("no puedes incluir numeros");
				return true;
			}else{
				for(var mayus=0;mayus<texto.length;mayus++){
					if(!(texto.charAt(mayus)==" ")){//condiciones para no testear espaciones en blanco
						if(texto.charAt(mayus).match(excluirCarac)){//excluir caracteres especiales excepto espacio
							alert("no puedes incluir carácteres especiales");
							return true;
						}else{
							if(texto.charAt(mayus)===texto.charAt(mayus).toUpperCase()){
								alert("no puedes utilizar mayusculas");
								return true;
							}
						}
					}
				}
			}
		}
		function encriptar(){
			var texto=input.value;
			if(reestriccion(texto)){
				alert("no puedes incluir números, mayusculas o caracteres especiales")
			}else{
				for(var letra=0; letra<texto.length;letra++){
					if(texto[letra]=="a"){
						var reemplazo=texto[letra].replace("a","ai");
						texto_encriptado=texto_encriptado+reemplazo;
					}else if(texto[letra]=="e"){
						var reemplazo=texto[letra].replace("e", "enter");
						texto_encriptado=texto_encriptado+reemplazo;
					}else if(texto[letra]=="i"){
						var reemplazo=texto[letra].replace("i","imes");
						texto_encriptado=texto_encriptado+reemplazo;
					}else if(texto[letra]=="o"){
						var reemplazo=texto[letra].replace("o","ober");
						texto_encriptado=texto_encriptado+reemplazo;
					}else if(texto[letra]=="u"){
						var reemplazo=texto[letra].replace("u","ufat");
						texto_encriptado=texto_encriptado+reemplazo;
					}else{
						texto_encriptado= texto_encriptado+texto[letra];
					}
				}
			document.getElementById("ningun").style.display = "none";//se oculta la imagen
			document.getElementById("TextoSalida").style.display="inline";//se muestra el texto encriptado
			document.getElementById("copiar").style.display="inline";//se muestra el boton copiar
			output.value=texto_encriptado;
            copiar.disabled=false;//se habilita el boton copiar
            document.getElementById("copiar").style.backgroundColor="green";//se cambia el color del boton copiar a verde
			}
			input.value="";//se limpia el campo de las palabras insertadas
			texto_encriptado="";//se limpia la variable para que no se vaya concatenando con las anteriores valores
		}
		function desencriptar(){
			var texto=input.value;
			var ai=/ai/gi;//se pone gi para reemplazar todas las apariciones de ai,enter,imes,ober,ufat
			var enter=/enter/gi;
			var imes=/imes/gi;
			var ober=/ober/gi;
			var ufat=/ufat/gi;
			var reemplazo= texto.replace(ai,"a");
			reemplazo=reemplazo.replace(enter,"e");
			reemplazo=reemplazo.replace(imes,"i");
			reemplazo= reemplazo.replace(ober,"o");
			reemplazo=reemplazo.replace(ufat,"u");
			output.value=reemplazo;
			input.value="";

		}
		function copy() {
			let copyText = document.querySelector("#TextoSalida");
			copyText.select();
			document.execCommand("copy");
		}
		  
		document.getElementById("TextoSalida").style.display="none";
		document.getElementById("copiar").style.display="none"
		encriptarB.onclick=encriptar;
		desencriptarB.onclick=desencriptar;
        copiar.onclick=copy;