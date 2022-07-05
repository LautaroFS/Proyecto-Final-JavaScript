let tBody = document.getElementById('tBody')

function recuepero() {
    let recuperarLS = JSON.parse(localStorage.getItem('historial')) || []

    recuperarLS.forEach(elemento => {
        let {interesesGanados} = elemento
        let tr = document.createElement('tr')
        tr.innerHTML = `<td>${elemento.tipo}</td>
                        <td>${elemento.plazo}</td>
                        <td>${elemento.monto}</td>
                        <td>${interesesGanados}</td>`
        tBody.appendChild(tr)
    });
}

recuepero()