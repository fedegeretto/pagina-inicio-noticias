const abrirMenu = document.querySelector("#abrir-menu");

const cerrarMenu = document.querySelector("#cerrar-menu");

const navBar = document.querySelector("#navbar");

abrirMenu.addEventListener("click", () => {
    navBar.classList.add("activo");
});

cerrarMenu.addEventListener("click", () => {
    navBar.classList.add("cerrar");

    setTimeout(() => {
        navBar.classList.remove("activo");
        navBar.classList.remove("cerrar");
    }, 300)
});