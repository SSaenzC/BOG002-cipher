import cipher from './cipher.js';

document.getElementById("encodeB").addEventListener("click", buttonEncode);

function buttonEncode() {
  let offset = document.getElementById('offset').value;
  let texto = document.getElementById('encodeT');
  let resultado = document.getElementById('decodeT');
  texto.style.color = '#6F7085';
  resultado.style.color = '#000'; 
  resultado.value = cipher.encode(offset,texto.value);
}

document.getElementById("decodeB").addEventListener("click", buttonDecode);

function buttonDecode() {
  let offset = document.getElementById('offset').value;
  let texto = document.getElementById('decodeT');
  let resultado = document.getElementById('encodeT');
  texto.style.color = '#6F7085';
  resultado.style.color = '#000'; 
  resultado.value = cipher.decode(offset,texto.value);
}

function tuto(){
  alert(`Bienvenid@ 
  \n \n Para cifrar:
  \n \t Escribe un número en el offset. 
  \n \t Pon tu mensahe en la nota izquierda. 
  \n \t Oprime el botón CIFRAR. El texto cifrado aparecerá en la nota derecha. Asegurate de que la persona que reciba el mensaje conozca el número que usaste para el offset 
  \n \n Para descifrar: 
  \n \t Deberias tener un número y el mensaje. Escribe el número en el offset 
  \n \t Pega o transcribe el mensaje que quieres descibrar en la nota de la derecha. 
  \n \t Oprime el botón DESCIFRAR. El texto cifrado aparecerá en la nota izquierda`)
}
tuto()