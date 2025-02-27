import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import { salvarListaNoLocalStorage, carregarListaDoLocalStorage } from "./scripts/localStorage.js"
import verificarListaVazia from "./scripts/verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");
const inputItem = document.getElementById("input-item");


botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista(inputItem);
    if (itemDaLista) {
        listaDeCompras.appendChild(itemDaLista);
        salvarListaNoLocalStorage();  
    }
    verificarListaVazia(listaDeCompras);
})

// Carregar a lista do localStorage quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
    carregarListaDoLocalStorage();
    verificarListaVazia(listaDeCompras);
});

verificarListaVazia(listaDeCompras);
