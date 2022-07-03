const nombreCajero = prompt("Ingrese el nombre del cajero")
cajeros.find(element => element == nombreCajero) ? confirm("¡Ingreso correctamente!") : alert("¡Nombre incorrecto! Ingrese nuevamente por favor.")

const calcularOperacion = new CalculadorDeOperacion(tipoOp, plazoOp, montoOpe)

const añadirTO = () => {
  let opcionTO = ""
  tipoOp.forEach(tipo => {
    opcionTO += `<option value="${tipo.Factor}-${tipo.MON}">${tipo.tipo}</option>`
  });
  return opcionTO
}

const plazoOpe = () => {
  let tiempoOpe = ""
  plazoOp.forEach(tipo => {
    tiempoOpe += `<option value="${tipo.factor}">${tipo.tiempo}</option>`
  });
  return tiempoOpe
}


const montoOp = () => {
  let montoOpera = ""
  montoOpe.forEach(mon => {
    montoOpera += `<option value="${mon.factor}">${mon.monto}</option>`
  });
  return montoOpera
}

const calculoDeOperacion = () => {
  const faltanDatos = (isNaN(parseInt(montoDeOperacion.value)) || plazoDeOperacion.value.trim() == "" || tipoDeOperacion.value.trim() == "")
  if (faltanDatos) {
    alert("Complete todos los datos.")
  } else {
    const animacion = document.getElementById("animacion")
    animacion.innerHTML = cargar()
    setTimeout(() => {
      let tipo = tipoDeOperacion.value
      let plazo = plazoDeOperacion.value
      let monto = montoDeOperacion.value
      let valorFinal = calcularOperacion.valorF(tipo, plazo, monto)
      animacion.innerHTML = ""
      montoFinal.innerText = `$ ${valorFinal}`
      let creditoUser = new Credito(tipo, monto, valorFinal, plazo)
      historial.push(creditoUser)
      localStorage.setItem('historial', JSON.stringify(historial))
    }, 2000)
  }
}


const cargar = () => {
  return `<div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
          </div>`
}