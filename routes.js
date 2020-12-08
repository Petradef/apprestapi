"use strict";

const { json } = require("body-parser");

module.exports = function (app) {
    var jsonku = require("./controller")

    app.route("/").get(jsonku.index)

    app.route("/tampil").get(jsonku.tampilsemuakaryawan)

    app.route("/tampil/:id").get(jsonku.tampilberdasarkanid)

    app.route("/tambah").post(jsonku.tambahKaryawan)

    app.route("/ubah").put(jsonku.ubahKaryawan)

    app.route("/hapus").delete(jsonku.hapusKaryawan)
}

