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
    database: "bd_rentacar"
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


app.listen(3000)