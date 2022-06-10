const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector (".mensagem");

function btnEncriptar() {
	const textoEncriptado = encriptar(inputTexto.value);
	mensagem.value=textoEncriptado;
	mensagem.style.background="none";
}

function encriptar(stringEncriptada) {
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	stringEncriptada = stringEncriptada.toLowerCase();
	
	for (let i=0;i<matrizCodigo.length;i++) {
			if (stringEncriptada.includes (matrizCodigo[i][0])) {
				stringEncriptada = stringEncriptada.replaceAll (matrizCodigo[i][0],matrizCodigo[i][1]);
			}
		}
	return stringEncriptada;
}

function btnDesencriptar() {
	const textoEncriptado = desencriptar(inputTexto.value);
	mensagem.value=textoEncriptado;
	mensagem.style.background="none";
}

function desencriptar(stringEncriptada) {
	let matrizCodigo = [["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];
	stringEncriptada = stringEncriptada.toLowerCase();
	
	for (let i=0;i<matrizCodigo.length;i++) {
			if (stringEncriptada.includes (matrizCodigo[i][0])) {
				stringEncriptada = stringEncriptada.replaceAll (matrizCodigo[i][0],matrizCodigo[i][1]);
			}
		}
	return stringEncriptada;
}

function copiarTexto () {
	var content = document.getElementById("textArea");
	content.select();
	document.execCommand("copy");
}

function limpaTela () {
	document.location.reload(true);
}