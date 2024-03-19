'use strict';

const { MemberModel } = require('../Model/MemberModel');

class MemberController {
    // get member controller
    static async getMemberController(req, res) {
        try {
            const result = await MemberModel.dapatMemberModel();

            if (result) {
                res.json({
                    status: 200,
                    message: result
                })   
            }

        } catch(err) {
            console.log(err.message);
        }
    }

    // get detail member
    static async getDetailMemberController(req, res) {
        const { id } = req.params;
        try {
            const result = await MemberModel.detailMemberModel(id);

            if (result) {
                res.json({
                    status: 200,
                    message: result
                })   
            }

        } catch(err) {
            console.log(err.message);
        }
    }

    // tambahkan member baru
    static async addMemberController(req, res) {
        const {nama, kode_member, nomor_telepon, masa_berlaku, id_member} = req.body;
        try {
            const result = await MemberModel.tambahMemberModel(nama, kode_member, nomor_telepon, masa_berlaku, id_member);

            if (result) {
                res.json({
                    status: 200,
                    message: result
                })
            }

        } catch(err) {
            console.log(err.message);
        }
    }

    // edit member baru
    static async editMemberController(req, res) {
        const { id } = req.params;
        const { nama, kode_member, nomor_telepon, masa_berlaku, id_member } = req.body;
        
        try {
            const result = await MemberModel.editMemberModel(id, nama, kode_member, nomor_telepon, masa_berlaku, id_member);

            if (result) {
                res.json({
                    status: 200,
                    message: result
                })
            }
        } catch(err) {
            console.log(err.message);
        }
    }

    // hapus member
    static async deleteMemberController(req, res) {
        const { id } = req.params;

        try {
            const result = await MemberModel.hapusMemberModel(id);

            if(result) {
              res.json({
                  status: 200,
                  message: result
              })  
            }
        } catch(err) {
            console.log(err.message);
        }
    }
}

module.exports = { MemberController };