class CalculadorDeOperacion {
    constructor (jsonTO, jsonPO, jsonMO){
        this.arrayTipoOp = jsonTO
        this.arrayPlazoOp = jsonPO
        this.arrayMontoOpe = jsonMO
    }
    valorF(montoOpe, factorTipo, factorTiempo){
        const indice = parseInt(factorTiempo) * parseInt(factorTipo)
        const valorFinal = indice * parseFloat(montoOpe)
        return valorFinal
    }
}

class Credito{
    constructor(tipo,monto,intereses,plazo){
        this.tipo = tipo;
        this.interesesGanados= intereses;
        this.monto = monto;
        this.plazo = plazo
    }
}