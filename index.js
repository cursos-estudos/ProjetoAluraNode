const CustomExpress = require('./config/CustomExpress')
const conexão = require('./database/conexão')
const tabelas = require('./database/tabelas')

conexão.connect(erro => {
    if(erro){
        console.log(erro)
    } else{
        console.log('conectado com sucesso')

        tabelas.init(conexão)

        const app = CustomExpress()

        app.listen(50001, () => console.log('servidor rodando na porta 50001'))

    }
})

