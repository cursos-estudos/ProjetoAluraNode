module.exports = app => {

    app.get('/atendimentos' , (req,res) => res.send('Você esta na rota atendimentos GET, salve pessoal'))

    app.post('/atendimentos' , (req,res) => {
    
        console.log(req.body)
        res.send('Você esta na rota atendimentos POST, salve pessoal')
        
    })

}