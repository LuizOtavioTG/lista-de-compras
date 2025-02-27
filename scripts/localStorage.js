
export function salvarListaNoLocalStorage() {
    const listaItens = [];
    const listaDeCompras = document.getElementById("lista-de-compras");
    const itens = listaDeCompras.getElementsByTagName("li");

    // Iterar sobre os itens da lista e salvar as informações
    for (const item of itens) {
        const itemTexto = item.querySelector("p").innerText;
        const itemData = item.querySelector(".texto-data").innerText;
        const isChecked = item.querySelector("input[type='checkbox']").checked;  // Salvar o estado do checkbox

        listaItens.push({ texto: itemTexto, data: itemData, checked: isChecked });
    }

    // Salvar a lista no localStorage
    localStorage.setItem("listaDeCompras", JSON.stringify(listaItens));
}

export function carregarListaDoLocalStorage() {
    const listaDeCompras = document.getElementById("lista-de-compras");
    const listaItens = JSON.parse(localStorage.getItem("listaDeCompras") || "[]");

    // Criar os itens da lista a partir dos dados do localStorage
    listaItens.forEach(item => {
        const itemDaLista = document.createElement("li");
        const containerItemDaLista = document.createElement("div");
        containerItemDaLista.classList.add("lista-item-container");

        const nomeItem = document.createElement("p");
        nomeItem.innerText = item.texto;

        const itemData = document.createElement("p");
        itemData.innerText = item.data;
        itemData.classList.add("texto-data");

        const inputCheckbox = document.createElement("input");
        inputCheckbox.type = "checkbox";
        inputCheckbox.checked = item.checked;  // Restaurar o estado do checkbox

        inputCheckbox.addEventListener("click", function() {
            if (inputCheckbox.checked) {
                nomeItem.style.textDecoration = "line-through";
            } else {
                nomeItem.style.textDecoration = "none";
            }
        });

        // Estabelece o estilo do nomeItem com base no estado do checkbox
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        }

        containerItemDaLista.appendChild(inputCheckbox);
        containerItemDaLista.appendChild(nomeItem);

        itemDaLista.appendChild(containerItemDaLista);
        itemDaLista.appendChild(itemData);
        listaDeCompras.appendChild(itemDaLista);
    });
}
