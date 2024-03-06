function transferir() {
    navigator.clipboard.writeText(
      document.getElementById("encrypted-text").value
    )
    .then(() => {
      console.log("Texto copiado al clipboard"); 
    })
    .catch((err) => {
      console.error("Error al copiar texto:", err); 
    });
  }
  
  const botonCopiar = document.getElementById("boton-copiar");
  botonCopiar.addEventListener("click", transferir);
  