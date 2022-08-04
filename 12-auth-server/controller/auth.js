const { response } = require('express');
const { validationResult } = require('express-validator');
const Usuario = require('../models/Usuario');
const btcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');


const crearUsuario = async(req, res) => {

    const {email, username, password} = req.body;
    

    try{

        // Varificar el email
        let usuario = await Usuario.findOne({email})

        if(usuario){
            return res.status(400).json({
                status: false,
                result: {
                    message: 'El usuario ya existe',
                    errors: []
                }
            });
        }    


        // Crear el usuario
        usuario = new Usuario(req.body);


        // Cifrar la contrasenia
        const salt = btcrypt.genSaltSync();
        usuario.password = btcrypt.hashSync(password, salt);

        await usuario.save();


        // Generar el JWT
        const token = await generarJWT(usuario.id, username)


        // Generar la respuesta
        return res.status(201).json({
            status: true,
            result: {
                message: 'Usuario creado correctamente',
                user: usuario,
                auth: {
                    token
                },
                errors: []
            }
        });


    }catch(error){
        console.log(error)
        return res.status(500).json({
            status: false,
            result: {
                message: 'Algo salio mal contacte con el admin :P',
                errors: []
            }
        });
    }
}

const iniciarSesion = async(req, res) => {

    const { email, password} = req.body;

    

    try{
        //let usuario = await Usuario.findOne({email})
        const usuario = await Usuario.findOne({email})
        if(!usuario){
            return res.status(400).json({
                status: false,
                result: {
                    message: 'Usuario o password no validos',
                    errors: []
                }
            });
        }

        // confirmar el password
        const validPassword = btcrypt.compareSync(password, usuario.password);

        if(!validPassword){
            return res.status(400).json({
                status: false,
                result: {
                    message: 'Usuario o password no validos',
                    errors: []
                }
            });
        }

        // Generar el JWT
        const token = await generarJWT(usuario.id, usuario.username)


        // Generar la respuesta
        return res.status(200).json({
            status: true,
            result: {
                message: 'Usuario creado correctamente',
                user: usuario,
                auth: {
                    token: token
                },
                errors: []
            }
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            status: false,
            result: {
                message: 'Algo salio mal contacte con el admin :P',
                errors: []
            }
        });
    }
}

const renewToken = async(req, res) => {    

    const usuario = await Usuario.findOne(req.id);
    
    // Generar el JWT
    const token = await generarJWT(usuario.id, usuario.username)

    return res.status(200).json({
        status: true,
        result: {
            message: 'Acceso validado',
            user: usuario,
            auth: {
                token
            },
            errors: []
        }
    });
}

module.exports = {
    crearUsuario: crearUsuario,
    iniciarSesion: iniciarSesion,
    renewToken: renewToken
}
