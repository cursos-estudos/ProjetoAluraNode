const CustomExpress = require('./config/CustomExpress')
const conexão = require('./database/conexão')

conexão.connect(erro => {
    if(erro){
        console.log(erro)
    } else{
        console.log('conectado com sucesso')

        const app = CustomExpress()

        app.listen(50001, () => console.log('servidor rodando na porta 50001'))

    }
})

