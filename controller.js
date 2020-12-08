"use strict"

var response = require("./res")
var connection = require("./koneksi")

exports.index = function (req, res) {
    response.ok("Aplikasi REST API Ku Berjalan!", res)
}

//menampilkan semua data karyawan
exports.tampilsemuakaryawan = function (req, res) {
    connection.query("SELECT * from karyawan", function (error, rows, fields) {
        if (error) {
            connection.log(error)
        } else {
            response.ok(rows, res)
        }
    })
}
