import express from "express"
import db from "./db.js"
import controller from "./Controller/controller.js"

const port = 3000
const app = express()

app.use(express.json())
controller(app, db)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})