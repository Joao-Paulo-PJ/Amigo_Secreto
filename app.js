//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
   let adicionando = document.getElementById("amigo");
   let nome = adicionando.value.trim(); // Captura e remove espaços extras
   if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
   }
   amigos.push(nome); // Adiciona ao array
   atualizarLista();
   adicionando.value = ""; // Limpa o campo após adicionar
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    //Gera o índice sorteado aleatoriamente
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    // Esconde a lista de amigos e exibe o sorteio
    document.getElementById("listaAmigos").style.display = "none";
    document.getElementById("resultado").innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;
}
