document.addEventListener("DOMContentLoaded", function() {
    

    const calcularBtn = document.getElementById("calcular-btn");
    const hectareasInput = document.getElementById("hectareas");
    const tipoZonaSelect = document.getElementById("tipo-zona");
    const resultadosSection = document.getElementById("resultados");
    const consumoAguaLit = document.getElementById("consumo-agua");
    const consumoElecKwh = document.getElementById("consumo-elec");
    const cantArboles = document.getElementById("cant-arboles");
    const arbolesProductivos = document.getElementById("arboles-productivos");
    const arbolesImproductivos = document.getElementById("arboles-improductivos");
    const arbolesErradicados = document.getElementById("arboles-erradicados");
    const arbolesResembrados = document.getElementById("arboles-resembrados");
    const zocas = document.getElementById("zocas");

    
    calcularBtn.addEventListener("click", function() {
        const consumo = parseFloat(hectareasInput.value);
        const tipoZona = tipoZonaSelect.value;

        if (isNaN(consumo) || consumo <= 0) {
            alert("Por favor, ingrese un numero de hectarea mayor a cero.");//alerta 
            return;
        }

        // Factores de ahorro del agua segun el tipo de zona
        let factorAhorro;
        switch (tipoZona) {
            case "mucho":
                factorAhorro = 0.75; // 20% de ahorro energético
                break;
            case "medio":
                factorAhorro = 0.88; // 25% de ahorro energético
                break;
            case "poco":
                factorAhorro = 0.97; // 30% de ahorro energético
                break;
            default:
                factorAhorro = 0;
        }

        // Cálculos del ahorro
        const consumoAgua = 396.63 * factorAhorro * consumo
        const consumoEnergia = 27.25 * consumo
        const numArboles = 386 * consumo
        const numArbolesProductivos = numArboles * 0.75
        const numArbolesImproductivos = numArboles * 0.035
        const numArbolesErradicados = numArboles * 0.002
        const numArbolesResembrados = numArboles * 0.05
        const numZocas = numArboles * 0.17

        // Mostrar los resultados
        consumoAguaLit.textContent = consumoAgua.toFixed(2);
        consumoElecKwh.textContent = consumoEnergia.toFixed(2);
        cantArboles.textContent = numArboles.toFixed(1);
        arbolesProductivos.textContent = numArbolesProductivos.toFixed(1);
        arbolesImproductivos.textContent = numArbolesImproductivos.toFixed(0);
        arbolesErradicados.textContent = numArbolesErradicados.toFixed(1);
        arbolesResembrados.textContent = numArbolesResembrados.toFixed(0);
        zocas.textContent = numZocas.toFixed(0);

        resultadosSection.classList.remove("hidden");
    });
});
