"use strict";

exports.ok = function (values, res) {
    var data = {
        "status": 200,
        "values": values,
    }
    res.json(data);
    res.end()

}

//respons untuk nested kompetensi
exports.oknested = function (values, res) {
    //lakukan akumulasi
    const hasil = values.reduce((akumulasikan, item) => {
        //tentukan key group
        if (akumulasikan[item.nama]) {
            //buatlah variabel group nama karyawan
            const group = akumulasikan[item.nama]
            //cek jika isi array adalah kompetensi
            if (Array.isArray(group.kompetensi)) {
                //tambahkan value ke dalam group kompetensi
                group.kompetensi.push(item.kompetensi)
            } else {
                group.kompetensi = [group.kompetensi, item.kompetensi]
            }
        } else {
            akumulasikan[item.nama] = item;
        }

        return akumulasikan;
    }, {});

    var data = {
        "status": 200,
        "values": hasil,
    }
    res.json(data);
    res.end()

}