var jwt = require('jsonwebtoken');

var SEED = require('../config/config').SEDD;



// ======================================= 
// Verificar token. Se pone aquí para validar los métodos de abajo ya por token.
// =======================================
exports.verificaToken = function(req, res, next){
    var token = req.query.token;

    jwt.verify( token, SEED, ( err, decoded ) => {
        if (err){
            return res.status(401).json({
                ok: false,
                mensaje: 'Token no válido',
                errors: err
            });
        }

        req.usuario = decoded.usuario;

        next();

        

        //return res.status(200).json({
        //    ok: true,
        //    decoded: decoded
        //});
});

}
