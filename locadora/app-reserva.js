function fnReservarVeiculo() {

    let formDados = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        veiculo: document.getElementById('veiculo').value
    }
    console.dir(formDados)

    fetch('http://localhost:8080/agendamentos', {
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
    .catch(error => {
        console.error('Erro:', error);
        alert("Erro ao realizar a reserva.");
    });
}