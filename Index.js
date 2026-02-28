const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const cors = require('cors')
app.use(cors())
app.use(express.json())

app.get('/', function (req, res) {
    res.send('rentacar')
})


let mysql = require('mysql')
let conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bd_rentacar2"
})

conexao.connect(function (erro) {
    if (erro) {
        console.log("Deu ruim na conexão \n");
        throw erro;
    } else {
        console.log("Conexão deu bom \n")
    }
})

//Reservas
app.post("/agendamentos/", function (req, res) {
    const data = req.body

    console.dir(data)
    conexao.query(`INSERT INTO agendamentos SET ?`, data, function (erro, resultado) {

        if (erro) {
            console.log("Erro", erro);
            return res.status(400).json(erro); 
        }
        res.send({ id: resultado.insertId });
    });
});

app.get("/agendamentos/", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    conexao.query("SELECT * FROM bd_rentacar2.agendamentos", function (erro, lista_agendamento, campos) {
        res.send(lista_agendamento)
    });
});

app.delete("/agendamentos/:id", function (req, res) {
    const id = req.params.id

    conexao.query(`delete from agendamentos where id= ${id}`, function (erro, resultado) {
        if (erro) {
            res.send(erro)
        }
        res.send({"status":200, "message": "Excluído com sucesso!"})
    })
})


//Veículos
app.post("/veiculos/", function (req, res) {
    const data = req.body

    console.dir(data)
    conexao.query(`INSERT INTO veiculos SET ?`, data, function (erro, resultado) {

        if (erro) {
            console.log("Erro", erro);
            return res.status(400).json(erro); 
        }
        res.send({ id: resultado.insertId });
    });
});


app.get("/veiculos/", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    conexao.query("SELECT * FROM bd_rentacar2.veiculos", function (erro, lista_veiculos, campos) {
        res.send(lista_veiculos)
    });
}); 


app.listen(3000)