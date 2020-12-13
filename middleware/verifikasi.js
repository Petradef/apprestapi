const jwt = require("jsonwebtoken")
const config = require("../config/secret")

function verifikasi() {
    return function (req, rest, next) {
        //bikin verifikasi role
        var role = req.body.role;
        //cek authorization headers
        var tokenWithBearer = req.headers.authorization;
        //if start = token
        if (tokenWithBearer) {
            var token = tokenWithBearer.split(" ")[1]
            //verifikasi
            jwt.verify(token, config.secret, function (err, decoded) {
                //if start
                if (err) {
                    return rest.status(401).send({ auth: false, message: "Token tidak terdaftar!" });
                } else {
                    //if start = roles
                    if (role == 2) {
                        req.auth = decoded;
                        next();
                    } else {
                        return rest.status(401).send({ auth: false, message: "Gagal mengauthorisasi Role Anda!" })
                    }
                    //if end = roles
                }
            })

        } //else start token
        else {
            return rest.status(401).send({ auth: false, message: "Token tidak tersedia!" })
        }
        //else end token
    }
}

module.exports = verifikasi