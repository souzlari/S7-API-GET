const { response } = require("express")
const express = require("express")
const app = express()

const estados = require("./data/estados-cidades.json")

// app.get("/",(request,response) => {
//     response.status(200).send("Testando homework! <3")
// })

app.get("/estados/todos",(request,response) => {  
    response.status(200).send(estados)     
})

app.get("/estados/:sigla",(request,response) => {
    const estadoSigla = request.params.sigla
    console.log(estadoSigla)
    console.log(require.params)

    response.status(200).send(estados.find(siglas => siglas.sigla === estadoSigla))

})

app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080")
}) 