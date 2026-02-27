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
        if (response.ok) {
            alert("Reserva realizada com sucesso!");
        } else {
            alert("Erro ao realizar a reserva.");
        }
    })
} 

let btn_salvar = document.getElementById("btn-salvar-reserva")

btn_salvar.addEventListener("click", function () {
    fnReservarVeiculo()
})