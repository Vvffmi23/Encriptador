const textArea = document.querySelector(".texto");
const mensaje = document.querySelector(".texto-encriptado");
const copia = document.querySelector(".copiar");
copia.style.display = "none"


function validarTexto(){
    let textoEscrito = document.querySelector(".texto").value;
    let validador = textoEscrito.match(/^[a-z\s\.\?\¿\,]*$/);
  

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none";
        textArea.value = "";
        copia.style.display = "block";
    }
}


function encriptar(stringEncriptado) {
  let matrizCodigo = [
    ["e", "eva"],
    ["i", "ines"],
    ["a", "ana"],
    ["o", "olga"],
    ["u", "ursula"],
  ];
  stringEncriptado = stringEncriptado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptado.includes(matrizCodigo[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptado;
}


function desEncriptar(stringDesencriptado) {
    let matrizCodigo = [
      ["e", "eva"],
      ["i", "ines"],
      ["a", "ana"],
      ["o", "olga"],
      ["u", "ursula"],
    ];
    stringDesencriptado = stringDesencriptado.toLowerCase();
  
    for (let i = 0; i < matrizCodigo.length; i++) {
      if (stringDesencriptado.includes(matrizCodigo[i][1])) {
        stringDesencriptado = stringDesencriptado.replaceAll(
          matrizCodigo[i][1],
          matrizCodigo[i][0]
        );
      }
    }
    return stringDesencriptado;
  }
  
  function btnDesencriptar() {
    const mensajeDesencriptado = desEncriptar(textArea.value);
    mensaje.value = mensajeDesencriptado;
    textArea.value = "";
  }
  


  function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}