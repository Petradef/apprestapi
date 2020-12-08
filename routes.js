"use strict";

module.exports = function (app) {
    var jsonku = require("./controllers")

    app.route("/").get(jsonku.index)
}

