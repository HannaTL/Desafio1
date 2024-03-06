function desencriptar() {
    try {
      const inputText = document.getElementById("input-text");
      const encryptedTextElement = document.getElementById("encrypted-text");
  
      if (inputText.value.match(/^[a-z ]*$/)) {
        const decryptedText = inputText.value
          .replace(/enter/gi, "e")
          .replace(/imes/gi, "i")
          .replace(/ai/gi, "a")
          .replace(/ober/gi, "o")
          .replace(/ufat/gi, "u");
        encryptedTextElement.textContent = decryptedText;
      } else {
        alert("Solo se permiten letras minúsculas, sin caracteres especiales.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  const botonDesencriptar = document.getElementById("boton-desencriptar");
  botonDesencriptar.onclick = desencriptar;
  