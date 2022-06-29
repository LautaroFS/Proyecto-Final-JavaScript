tipoDeOperacion.innerHTML = añadirTO()
plazoDeOperacion.innerHTML = plazoOpe()
montoDeOperacion.innerHTML = montoOp()
btnCalcular.addEventListener("click", () => {
    calculoDeOperacion()
    
})
btnHistorial.addEventListener("click", ()=> {
    location.href = "historial.html"
})