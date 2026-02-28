function fnListarAgendamento(agendamentos) {
    let lista = `
        <tbody id="lista-agendamento">
                <tr>
                    <td>${agendamentos.id}</td>
                    <td>${agendamentos.nome_cliente}</td>
                    <td>${agendamentos.email_cliente}</td>
                    <td>${agendamentos.categoria}</td>
                    <td>
                    <button type="button" class="btn" onclick="fnExcluirAgendamento(${agendamentos.id}, event.target)"> <i class="bi bi-trash"></i> </button>
                </tr>

        </tbody>
    `
    document.querySelector("#lista-agendamento").innerHTML += lista
}

function fnCarregarDados() {

    fetch('http://localhost:3000/agendamentos/', { method: 'GET' })
        .then(response => response.json())
        .then((agendamentos) => {
            agendamentos.forEach(agendamentos => {
                fnListarAgendamento(agendamentos)
            });
        })
        .catch(erro => console.log(erro.message))
}

fnCarregarDados()

