const obtencionDeDatos = (URL) => { 
    fetch(URL)
    .then(response => response.json())
    .then(data => {
     data.tipoOp.forEach(element => {
        tipoOp.push(element)
     });
     data.plazoOp.forEach(element => {
        plazoOp.push(element)
     });
     data.montoOpe.forEach(element => {
        montoOpe.push(element)
     });
        
     comenzar()
    })
}
obtencionDeDatos(URL)