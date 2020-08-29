const express = require('express')
const app = express()
const routes = require("./config/routes")
const port = 8080


const todo = [{
    _id: "khfkhsYYaHHHdm",
    text: "suck my vagina"

}]

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
