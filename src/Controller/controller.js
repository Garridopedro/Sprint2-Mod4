const controller = (app, dados) => {
    app.post('/create', (req, res) => {
        const body = req.body
        dados.dicas.push(body.dicas)
        console.log(body)
        res.json(body)
    })
    app.get('/dicas', (req, res) => {
        res.json({
            "dicas": dados.dicas[parseInt(Math.random() * dados.dicas.length)]
        })
    })
}

export default controller