const conexao = require('../database/conexão')
const uploadDeArquivo = require('../arquivos/Uploaddearquivos')

class Pet{
    adiciona(pet, res){
        const query = 'INSERT INTO Pets SET ?'

        uploadDeArquivo(pet.image, pet.nome, (erro,novoCaminho) => {

            if(erro){
                res.status(400).json({erro})
            }
            else {
                const novoPet = {nome: pet.nome, image: novoCaminho}
            
                conexao.query(query, novoPet, erro => {
                    if(erro){
                        console.log(erro)
                        res.status(400).json(erro)
                    } else {
                        res.status(200).json(novoPet)
                    }
                })

            }

            
        })        
        
    }
}

module.exports = new Pet()