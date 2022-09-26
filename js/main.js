let bnt_menu = document.querySelector("#abrir-menu"); 
let bnt_fechar_menu = document.querySelector("#fechar-menu"); 
const menu_aberto = document.querySelector(".menu-aberto")

function menuLateral(){ 
    menu_aberto.classList.toggle("menu-on")
};

bnt_menu.addEventListener("click", menuLateral)
bnt_fechar_menu.addEventListener("click", menuLateral)