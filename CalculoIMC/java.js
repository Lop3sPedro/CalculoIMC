function calculate() {
    var imc;
    var resultado = document.getElementById("resultado");

    var peso = parseInt(document.getElementById("peso").value);
    document.getElementById("peso-val").textContent = peso + " kg";

    var altura = parseInt(document.getElementById("altura").value);
    document.getElementById("altura-val").textContent = altura + " cm";

    imc = (peso / Math.pow((altura / 100), 2)).toFixed(1);
    resultado.textContent = imc;

    if (imc < 18.5) {
        categoria = "Abaixo do peso";
        resultado.style.color = "#DBA842"
    } else if (imc >= 18.5 && imc <= 24.9) {
        categoria = "Peso Normal"
        resultado.style.color = "#0AC937";
    } else if (imc >= 25 && imc <= 29.9) {
        categoria = "Pré-obeso"
        resultado.style.color = "#FA7D1A"
    } else if (imc >= 30 && imc <= 34.9) {
        categoria = "Obsidade Classe I"
        resultado.style.color = "#FA261A"
    } else if (imc >= 35 && imc <= 39.9) {
        categoria = "Obsidade Classe II"
        resultado.style.color = "#BA261A"
    } else {
        categoria = "Obsidade Classe III"
        resultado.style.color = "#49089E"
    }

    document.getElementById("categoria").textContent = categoria;
}