const mongoose = require('mongoose')
const DB_Uri = 'mongodb://localhost:27017/Prueba-Tecnica'

module.exports = () => {
  
    const connect = () => {

        mongoose.connect(
            DB_Uri     
        )    
    }

    connect();
    console.log('Se conecto Correctamente')
}