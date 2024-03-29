const axios = require('axios')
const moment = require('moment')
const conexao = require('../infraestrutura/database/conexão')
const repositorio = require('../repositorios/atendimentos')

class Atendimento {

    constructor() {
        this.dataEhValida = ({data, dataCriacao}) => moment(data).isSameOrAfter(dataCriacao)
        this.clientEhValido = (tamanho) => tamanho >=5

        this.valida = parametros => this.validacoes.filter(campo => {
            const { nome } = campo
            const parametro = parametros[nome]

            return !campo.valido(parametro)
        })

        this.validacoes = [
            {   nome:'data',
                valido: this.dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: this.clientEhValido,
                mensagem: 'Cliente deve ter pelo menos 5 caracteres' 
            }
        ]
    }
    
    adiciona(atendimento) {

        const dataCriacao = new Date()
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

        
        const parametros = {
            data: { data, dataCriacao },
            cliente: { tamanho: atendimento.cliente.length }
        }
        

        const erros = this.valida(parametros)
        const existemErros = erros.length

        if(existemErros){
            return new Promise((resolve,reject) => reject(erros))            
        } else{
            const atendimentoDatado = { ...atendimento, dataCriacao, data }

            
            return repositorio.adiciona(atendimentoDatado)
                .then(resultados =>{
                    const id = resultados.insertId
                    return ({ ...atendimento,id })
                })            
        }
    }

    lista(){        
        return repositorio.lista()        
    }

    buscaPorId(id){       
        
        const atendimento = repositorio.buscaPorId(id)       
        
        return atendimento
        
        
    }

    altera(id, valores){

        if(valores.data){
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')            
        } 
        

        return repositorio.alterar(id, valores)        
    }

    deleta(id) {
        

        return repositorio.deleta(id)        
    }
}

module.exports = new Atendimento