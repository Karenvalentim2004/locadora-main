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