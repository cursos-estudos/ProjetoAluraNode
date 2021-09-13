const query = require('../infraestrutura/database/queries')

class Atendimento{
    adiciona(atendimento){
        const sql = 'INSERT INTO Atendimentos SET ?'
        return query(sql, atendimento)
    }

    lista() {
        const sql = 'SELECT * from atendimentos'

        return query(sql)
    }

    buscaPorId(id){
        const sql = `SELECT * FROM atendimentos WHERE id=${id}`

        return query(sql, id)
    }

    alterar(id, valores){
        const sql = `UPDATE atendimentos SET ? WHERE id=${id}`

        return query(sql, valores)

    }

    deleta(id){
        const sql = `DELETE FROM atendimentos WHERE id=${id}`

        return query(sql, id)
    }
}

module.exports = new Atendimento()