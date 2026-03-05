const veiculo = document.getElementById("veiculo")
const preco = document.getElementById("preco")
const imagem = document.getElementById("imagem-veiculo")

veiculo.addEventListener("change", function () {

    const tipo = veiculo.value

    if (tipo === "Básico") {
        preco.innerText = "99,00"
        imagem.src = "imagens/renault-kwid.png"
    }

    if (tipo === "Família") {
        preco.innerText = "250,00"
        imagem.src = "imagens/virtus.png"
    }

    if (tipo === "Luxo") {
        preco.innerText = "1.000,00"
        imagem.src = "imagens/9112.png"
    }

})




function fnLimparCampos() {
    document.getElementById("form-reserva").reset()
}

function fnReservarVeiculo() {

    let formDados = {
        nome_cliente: document.getElementById('nome').value,
        email_cliente: document.getElementById('email').value,
        categoria: document.getElementById('veiculo').value
    }
    console.dir(formDados)

    fetch('http://localhost:3000/agendamentos/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDados)
    })
        .then(response => {
            fnLimparCampos()
            if (response.ok) {
                alert("Reserva realizada com sucesso!");
            } else {
                alert("Erro ao realizar a reserva.");
            }
        })
}

let form = document.getElementById("form-reserva");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    fnReservarVeiculo();
});