const obtencionDeDatos = (URL) => { 
    debugger
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        datos = data
        datos.array.forEach(elmentos => {
            
        });

    })
}