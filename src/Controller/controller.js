const controller = (app, db) => {
    app.post('/create', (req, res) => {
        const body = req.body
        db.dicas.push(body.dicas)
        console.log(body)
        res.json(body)
    })
    app.get('/dicas', (req, res) => {
        res.json({
            "dicas": db.dicas[parseInt(Math.random() * db.dicas.length)]
        })
    })
}

export default controller