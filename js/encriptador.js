function replaceLetters(text) {
    return text
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  }
  
  function encriptar() {
    try {
      const inputText = document.getElementById("input-text");
      const encryptedTextElement = document.getElementById("encrypted-text");
  
      if (inputText.value.match(/^[a-z ]*$/)) {
        const encryptedText = replaceLetters(inputText.value);
        encryptedTextElement.textContent = encryptedText;
      } else {
        alert("Solo se permiten letras minúsculas, sin caracteres especiales.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  const botonEncriptar = document.getElementById("boton-encriptar");
  botonEncriptar.onclick = encriptar;
  