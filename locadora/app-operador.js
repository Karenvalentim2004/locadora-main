function fnMontarLista(veiculos) {
    let lista = `
        <tbody id="lista-veiculos">
                <tr>
                    <td>${veiculos.id}</td>
                    <td>${veiculos.modelo}</td>
                    <td>${veiculos.marca}</td>
                    <td>${veiculos.placa}</td>
                    <td>${veiculos.categoria}</td>
                    <td>
                </tr>

        </tbody>
    `
    document.querySelector("#lista-veiculos").innerHTML += lista
}

function fnCarregarDados() {

    fetch('http://localhost:3000/veiculos/', { method: 'GET' })
        .then(response => response.json())
        .then((veiculos) => {
            veiculos.forEach(veiculos => {
                fnMontarLista(veiculos)
            });
        })
        .catch(erro => console.log(erro.message))
}

fnCarregarDados()
