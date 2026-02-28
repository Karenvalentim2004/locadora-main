function fnExcluirAgendamento(id) {
    fetch('http://localhost:3000/agendamentos/' + id, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(resposta => resposta.json())
        .then((dados) => {
            console.dir(dados)
        })
        .catch(erro => console.log(erro.message))
}

function fnExcluirAgendamento(id, elemento) {
    let confirmar = confirm("Deseja realmente excluir este agendamento?")
    if (confirmar) {

        fetch('http://localhost:3000/agendamentos/' + id, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(resposta => resposta.json())
            .then((dados) => {
                elemento.closest("tr").remove()
            })
            .catch(erro => console.log(erro.message))
    }
}