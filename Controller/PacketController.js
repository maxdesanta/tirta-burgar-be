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

    // add packet controller
    static async addPacketController(req, res) {
        const {nama_paket, harga, durasi} = req.body;

        try {
            const result = await PacketModel.tambahPaketModel(nama_paket, harga, durasi);

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

    // get detail packet controller
    static async getDetailPacketController(req, res) {
        const { id } = req.params;

        try {
            const result = await PacketModel.dapatDetailPacketModel(id);

            if (result) {
                res.json({
                    status: 200,
                    message: result
                })
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    // update packet controller
    static async updatePacketController(req, res) {
        const { nama_paket, harga, durasi } = req.body;
        const { id } = req.params;

        try {
            const result = await PacketModel.editPaketModel(nama_paket,harga,durasi,id);

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

    // hapus packet controller
    static async deletePacketController(req, res) {
        const { id } = req.params;

        try {
            const result = await PacketModel.hapusPaketModel(id);

            if (result) {
                res.json({
                    status: 200,
                    message: result
                })
            }
        } catch (err) {
            console.log(err.message)
        }
    }
}

module.exports = { PacketController };