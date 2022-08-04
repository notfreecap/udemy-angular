const { response } = require('express')
const jwt = require('jsonwebtoken')

const validarJWT = (req, res = response, next) => {

    const token = req.header('Authorization');
    if(!token){
        return res.status(401).json({
            status: false,
            result: {
                message: 'Error en el token :"(',
                errors: []
            }
        });
    }

    try{
        const { uid, name} = jwt.verify(token, process.env.SECRET_JWT_SEED);
        req.uid = uid;
        req.name = name;

    } catch ( error ){
        return res.status(401).json({
            status: false,
            result: {
                message: 'Token no valido',
                errors: []
            }
        });
    }

    next();
}

module.exports = {
    validarJWT
}