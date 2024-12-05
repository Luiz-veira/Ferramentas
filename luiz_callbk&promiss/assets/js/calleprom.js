const autores = [{ nome: "Ana" }, { nome: "Mariana" }, { nome: "Joanana" }];

function imprimirAutores() {
    // setTimeout

    let saida = ``;
    for (let i in autores) {
        saida += `<li>${autores[i].nome}</li>`
        // },2000} // 2000ms = 2s

    }
    document.querySelector(`ul`).innerHTML = saida;
}

function adicionarAutor(autor) {
    // setTimeout
    autores.push(autor);
    // },2000} // 2000ms = 2s
}

function formulario() {
    event.preventDefault();

    let autor = {nome: event.target[0].value};

    // adicionarAutor{autor};
    // imprimirAutores{autores};

    adicionarAutor(autor);
    imprimirAutores();

    event.target[0].value = ``;
}