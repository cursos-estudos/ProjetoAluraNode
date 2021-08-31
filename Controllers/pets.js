const pet = require('../models/pets')

module.exports = app => {
    
    app.post('/pet', (req, res) => {
        
        const Pet = req.body

        pet.adiciona(Pet, res)
    })

}