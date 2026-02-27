function fnCadastrarVeiculo() {
    let formDados = {
        modelo: document.getElementById('modelo').value,
        marca: document.getElementById('marca').value,
        placa: document.getElementById('placa').value,
        categoria: document.getElementById('categoria').value,
    }
    console.dir(formDados)

    fetch('http://localhost:3000/veiculos/', {
        method: 'POST',
        headers: {  
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDados)
    })
    .then(response => {
        if (response.ok) {
            alert("Veículo cadastrado com sucesso!");
        } else {
            alert("Erro ao cadastrar o veículo.");
        }
    })
}

let btn_salvar = document.getElementById("btn-salvar-veiculo")

btn_salvar.addEventListener("click", function () {
    fnCadastrarVeiculo()
})