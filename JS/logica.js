const calcularOperacion = new CalculadorDeOperacion (tipoOp, plazoOp, montoOpe)

const añadirTO = ()=> {
      let opcionTO = ""
          tipoOp.forEach( tipo => {
            opcionTO += `<option value="${tipo.Factor}-${tipo.MON}">${tipo.tipo}</option>`
          });
          return opcionTO
}

const plazoOpe = ()=> {
    let tiempoOpe = ""
        plazoOp.forEach( tipo => {
          tiempoOpe += `<option value="${tipo.factor}">${tipo.tiempo}</option>`
        });
        return tiempoOpe
}


const montoOp = ()=> {
    let montoOpera =""
        montoOpe.forEach( mon => {
          montoOpera += `<option value="${mon.factor}">${mon.monto}</option>`
        });
        return montoOpera
}

const calculoDeOperacion = ()=> {
  const faltanDatos = (isNaN(parseInt(montoDeOperacion.value)) || plazoDeOperacion.value.trim() == "" || tipoDeOperacion.value.trim() == "") 
  if (faltanDatos) {
    alert("Complete todos los datos.")
  } else {
    let tipo = tipoDeOperacion.value 
    let plazo = plazoDeOperacion.value 
    let monto = montoDeOperacion.value 
    let valorFinal = calcularOperacion.valorF(tipo, plazo, monto) 
        montoFinal.innerText = `$ ${valorFinal}`
        
        let creditoUser = new Credito(tipo,monto,valorFinal,plazo)    
        historial.push(creditoUser)
        localStorage.setItem('historial', JSON.stringify(historial))
  }
}