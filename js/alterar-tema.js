let botaoTema = document.querySelector("#botaoTema");
console.log(botaoTema);

botaoTema.addEventListener("click", () => {
    let body = document.querySelector("body");
    let boneco = document.querySelector(".boneco");
    let calculadora = document.querySelector(".calculadora");
    let botao = document.querySelectorAll(".botao");
    let botao_igual = document.querySelectorAll(".botao_igual");
    let botao_zero = document.querySelectorAll(".botao_zero");
    let form = document.querySelector("form");

    if (botaoTema.checked) {
        body.classList.add("body-hornet");

        boneco.classList.add("boneco-hornet");

        calculadora.classList.add("calculadora-hornet");

        botao.classList.add("botao-hornet");

        botao_igual.classList.add("botao_igual-hornet");

        botao_zero.classList.add("botao_zero-hornet");

    } else {
        body.classList.remove("body-hornet");

        boneco.classList.remove("boneco-hornet");

        calculadora.classList.remove("calculadora-hornet");

        botao.classList.remove("botao-hornet");

        botao_igual.classList.remove("botao_igual-hornet");

        botao_zero.classList.remove("botao_zero-hornet");
    }
});