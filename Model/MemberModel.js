'use strict';

const {db, connectSql} = require('../Config/db');

class MemberModel {
    constructor(id,nama,kode_member,nomor_telepon,masa_berlaku,nama_paket,durasi,create_at,update_at) {
        this.id = id;
        this.nama = nama;
        this.kode_member = kode_member;
        this.nomor_telepon = nomor_telepon;
        this.masa_berlaku = masa_berlaku;
        this.nama_paket = nama_paket;
        this.durasi = durasi;
        this.create_at = create_at;
        this.update_at = update_at;
    }

    // tampilkan data member
    static async dapatMemberModel() {
        const sqlQuery = 'SELECT member.id, member.nama, member.kode_member, member.nomor_telepon, member.masa_berlaku, packets.nama_paket, packets.durasi ,member.create_at, member.update_at FROM member INNER JOIN packets ON member.id_member = packets.id';

        try {
            const response = await connectSql(sqlQuery);
            const datas = [];
            let data;

            response.forEach(d => {
                data = new MemberModel(
                    d.id,
                    d.nama,
                    d.kode_member,
                    d.nomor_telepon,
                    d.masa_berlaku,
                    d.nama_paket,
                    d.durasi,
                    d.create_at,
                    d.update_at
                )

                datas.push(data);
            });

            return datas;
        } catch(err) {
            console.log(err.message);
        }
    }

    // tampilkan detail member
    static async detailMemberModel(id) {
        const sqlQuery = `SELECT member.id, member.nama, member.kode_member, member.nomor_telepon, member.masa_berlaku, packets.nama_paket, packets.durasi ,member.create_at, member.update_at FROM member INNER JOIN packets ON member.id_member = packets.id WHERE member.id = ${id}`;

        try {
            const detailData = await connectSql(sqlQuery, [id]);
            const data = detailData[0];
            let dataById;

            if (data) {
                dataById = new MemberModel(
                    data.id,
                    data.nama,
                    data.kode_member,
                    data.nomor_telepon,
                    data.masa_berlaku,
                    data.nama_paket,
                    data.durasi,
                    data.create_at,
                    data.update_at
                );
            } else {
                return 'member tidak ditemukan';
            }

            return dataById;
        } catch (err) {
            console.log(err.message);
        }
    }

    // tambah member
    static async tambahMemberModel(nama, kode_member, nomor_telepon, masa_berlaku, id_member) {
        const sqlQuery = `INSERT INTO member (nama, kode_member, nomor_telepon, masa_berlaku, id_member) VALUES ('${nama}', '${kode_member}', '${nomor_telepon}', '${masa_berlaku}', '${id_member}')`;

        try {
            const createMember = await connectSql(sqlQuery, [nama, kode_member, nomor_telepon, masa_berlaku, id_member])

            if (createMember) {
                return 'Member baru ditambahkan'
            }
        } catch (err){
            console.log(err.message);
        }
    }

    
    // edit member
    static async editMemberModel(id, nama, kode_member, nomor_telepon, masa_berlaku, id_member) {
        const sqlQuery = `UPDATE member SET nama = ?, kode_member = ?, nomor_telepon = ?, masa_berlaku = ?, id_member = ? WHERE id = ?`;

        try {
            const updateMember = await connectSql(sqlQuery, [nama, kode_member, nomor_telepon, masa_berlaku, id_member, id])

            if (updateMember) {
                return 'Member sudah diedit'
            }
        } catch (err){
            console.log(err.message);
        }
    }

    // hapus member
    static async hapusMemberModel(id) {
        const sqlQuery = `DELETE FROM member WHERE id = ${id}`;

        try {
            const deleteMember = await connectSql(sqlQuery, [id]);

            if (deleteMember) {
                return 'Member sudah dihapus'
            }
        } catch (err) {
            console.log(err.message);
        }
    }
}

module.exports = { MemberModel };