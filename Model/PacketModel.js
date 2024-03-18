'use strict';

const {db, connectSql} = require('../Config/db');

class PacketModel {
    constructor(id, nama_paket, harga, durasi, created_at, updated_at) {
        this.id = id;
        this.nama_paket = nama_paket;
        this.harga = harga;
        this.durasi = durasi;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    // tampilkan packet model
    static async dapatPacketModel(result) {
        // query
        const sqlQuery = "SELECT * FROM packets";

        try {
            const response = await connectSql(sqlQuery);

            const datas = [];
            let data;

            response.forEach(d => {
                data = new PacketModel(
                    d.id,
                    d.nama_paket,
                    d.harga,
                    d.durasi,
                    d.create_at,
                    d.updated_at
                )

                datas.push(data);
            });

            return datas;
        } catch(err) {
            console.log(err.message);
        }
    }

    // tambah paket
    static async tambahPaket(nama_paket, harga, durasi) {
        const sqlQuery = `INSERT INTO packets (nama_paket, harga, durasi) VALUES ('${nama_paket}', '${harga}', '${durasi}')`;

        try {
            const createPacket = await connectSql(sqlQuery, [nama_paket, harga, durasi]);

            if (createPacket) {
                return 'Paket baru ditambahkan'
            }
        } catch(err) {
            console.log(err.message)
        }
    }
}

module.exports = { PacketModel };