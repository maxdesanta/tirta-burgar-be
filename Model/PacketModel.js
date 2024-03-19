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
    static async dapatPacketModel() {
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
    static async tambahPaketModel(nama_paket, harga, durasi) {
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

    // tampilkan detail packet
    static async dapatDetailPacketModel(id) {
        // query
        const sqlQuery = "SELECT * FROM packets WHERE id = ?";

        try {
            const response = await connectSql(sqlQuery, [id]);

            const data = response[0];
            let dataById;

            if (data) {
                dataById = new PacketModel(
                    data.id,
                    data.nama_paket,
                    data.harga,
                    data.durasi,
                    data.create_at,
                    data.updated_at
                );
            } else {
                return "data tidak ditemukan"
            }

            return dataById;
        } catch(err) {
            console.log(err.message);
        }
    } 

    // tambah paket
    static async editPaketModel(nama_paket,harga,durasi,id) {
        const sqlQuery = `UPDATE packets SET nama_paket = ?, harga = ?, durasi = ? WHERE id = ?`;

        try {
            const createPacket = await connectSql(sqlQuery, [nama_paket,harga,durasi, id]);

            if (createPacket) {
                return 'Paket sudah diperbaharui'
            } else {
                return "data tidak ditemukan"
            }
        } catch(err) {
            console.log(err.message)
        }
    }

    // hapus paket
    static async hapusPaketModel(id) {
        const sqlQuery = `DELETE FROM packets WHERE id = ?`;

        try {
            const deletePacket = await connectSql(sqlQuery, [id]);

            if (deletePacket) {
                return 'Paket sudah dihapus'
            } else {
                return "data tidak ditemukan"
            }
        } catch (err) {
            console.log(err.message)
        }
    }
}

module.exports = { PacketModel };