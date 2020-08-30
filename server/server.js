const routes = require("./config/routes")
const express = require('express')
var cors = require('cors')
const app = express()
const port = 8080


const todo = [{
    _id: "khfkhsYYaHHHdm",
    text: "suck my vagina"

}]

app.use(cors())
app.use(express.json())

app.get(routes.todo, function (req, res) {
  res.send(todo)
})

app.post(routes.todo, function (req, res) {
    todo.push(req.body)
    res.send(todo)
  })
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
