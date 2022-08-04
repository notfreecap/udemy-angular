const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.BD_CNN, {
            //userNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex: true
        });

        console.log('DB online')

    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar a la base de datos');
    }
}

module.exports = {
    dbConnection
}