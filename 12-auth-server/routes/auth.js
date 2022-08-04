const { Router } = require('express');
const { check } = require('express-validator')
const { crearUsuario, iniciarSesion, renewToken } = require('../controller/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Crear usuario
router.post('/new', [
    check('username', 'El usuario es requerido').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').isStrongPassword(),
    validarCampos
], crearUsuario)

// Login de usuarios
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').isStrongPassword(),
    validarCampos
], iniciarSesion);

// Validar/revalidar token
router.get('/renew', validarJWT, renewToken)

module.exports = router;