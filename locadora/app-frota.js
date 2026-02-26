function fnAlterarFoto() {
    if (foto.value != '') {
        document.getElementById("fundo-imagem").style.backgroundImage = `url('${foto.value}')`
    } else {
        document.getElementById("fundo-imagem").style.backgroundImage = `url('https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
    }
    console.log(foto.value)
}

function fnMensagemSalvar() {
    var toastElList = [].slice.call(document.querySelectorAll(".toast")) 
    var toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show())
} 
 
function fnSalvarveiculos() {
    const parametros = new URLSearchParams(window.location.search);
    const id = parametros.get('id') + "/"

    let formDados = {
        titulo: document.getElementById("titulo").value,
        preco: document.getElementById("preco").value,
        descricao: document.getElementById("descricao").value,
        avaliacao: document.getElementById("avaliacao").value,
        foto: document.getElementById("foto").value,
        categoria: document.getElementById("categoria").value
    }
    console.dir(formDados)

    fetch('http://localhost:3000/veiculo/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formDados)
    })

        .then(resposta => resposta.json())
        .then((dados) => {
            fnMensagemSalvar()
        })
        .catch(erro => console.log(erro.message))
}

let foto = document.getElementById("foto")
let btn_salvar = document.getElementById("btn-salvar-veiculo")

foto.addEventListener("blur", function () {
    fnAlterarFoto()
})

btn_salvar.addEventListener("click", function () {
    fnSalvarveiculos()
})   

function fnMontarveiculo(veiculo) {
    document.getElementById("fundo-imagem").style.backgroundImage = `url(${veiculo.foto})`
    document.getElementById("foto").value = veiculo.foto
    document.getElementById("modelo").value = veiculo.modelo
    document.getElementById("marca").value = veiculo.marca
    document.getElementById("placa").value = veiculo.placa
    document.getElementById("preco").value = veiculo.preco
    document.getElementById("categoria").value = veiculo.categoria
}

fnCarregarDados()


function fnCarregarDados() {
    const parametros = new URLSearchParams(window.location.search);
    const id = parametros.get('id') + "/"

    fetch('http://localhost:3000/veiculo/' + id, { method: 'GET' })
        .then(resposta => resposta.json())
        .then((veiculos) => {
            veiculos.forEach(veiculo => {
                fnMontarveiculo(veiculo)
            })
        })
        .catch(err => console.log(err.message))
} 