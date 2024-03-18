'use strict';

const { PacketModel } = require('../Model/PacketModel');

class PacketController {

    // get packet controller
    static async getPacketController(req, res) {
        try {
            const result = await PacketModel.dapatPacketModel();

            if(result) {
                res.json({
                    status: 200,
                    message: result
                })
            } 
        } catch (err) {
            console.log(err.message);
        }
    }

    // get packet controller
    static async addPacketController(req, res) {
        const {nama_paket, harga, durasi} = req.body;

        try {
            const result = await PacketModel.tambahPaket(nama_paket, harga, durasi);

            if(result) {
                res.json({
                    status: 200,
                    message: result
                })
            } 
        } catch (err) {
            console.log(err.message);
        }
    }
}

module.exports = { PacketController };