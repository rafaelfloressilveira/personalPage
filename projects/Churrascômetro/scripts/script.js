// Carne -> 250gr p/ pessoa  +6h -> 400gr
// Refri -> 1200ml p/ pessoa +6h -> 2000ml
// Suco -> 500ml p/ pessoa +6h -> 1200ml

// Crianças / 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputTime = document.getElementById("time");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let time = inputTime.value;

    let qtdTotalCarne = carnePP(time) * adultos + (carnePP(time) / 2 * criancas);
    let qtdTotalRefri = refriPP(time) * adultos + (refriPP(time) / 2 * criancas);
    let qtdTotalSuco = sucoPP(time) * adultos + (sucoPP(time) / 2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000}kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalRefri / 2000)} Garrafas de 2L de Refri</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalSuco / 1500)} Garrafas de 1,5L de Suco</p>`
    resultado.innerHTML += `<p>Bebida alcoólica cada um leva a sua!</p>`

}

function carnePP(time) {
    if (time >= 6) {
        return 400;
    } else {
        return 250;
    }
}

function refriPP(time) {
    if (time >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function sucoPP(time) {
    if (time >= 6) {
        return 1200;
    } else {
        return 500;
    }
}
