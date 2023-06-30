let botaoTema = document.querySelector("#botaoTema");
console.log(botaoTema);

botaoTema.addEventListener("click", () => {
    let body = document.querySelector("body");
    let boneco = document.querySelector(".boneco");
    let nav_link_active = document.querySelector(".nav-link.active");
    let cards = document.querySelectorAll(".card");
    let cards_descricao = document.querySelectorAll(".card-descricao");
    let cards_botao = document.querySelectorAll(".card-botao");
    let form = document.querySelector("form");

    if (botaoTema.checked) {
        body.classList.add("body-hornet");

        boneco.classList.add("boneco-hornet");

        nav_link_active.classList.add("nav-link-dark.active");

        cards.forEach((card) => {
            card.classList.add("card-dark");
        });

        cards_descricao.forEach((descricao) => {
            descricao.classList.add("card-dark-descricao");
        });

        cards_botao.forEach((botao) => {
            botao.classList.add("card-dark-botao");
        });

        form.classList.add("form-dark");

    } else {
        body.classList.remove("body-hornet");
        header.classList.remove("header-dark");

        boneco.classList.remove("boneco-hornet");

        nav_link_active.classList.remove("nav-link-dark.active");

        cards.forEach((card) => {
            card.classList.remove("card-dark");
        });

        cards_descricao.forEach((descricao) => {
            descricao.classList.remove("card-dark-descricao");
        });

        cards_botao.forEach((botao) => {
            botao.classList.remove("card-dark-botao");
        });

        form.classList.remove("form-dark");
    }
});