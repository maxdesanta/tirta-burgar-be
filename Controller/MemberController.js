'use strict';

const { MemberModel } = require('../Model/MemberModel');

class MemberController {
    static getMemberController(req, res) {
        const response = MemberModel.dapatMemberModel();
        res.json({
            message: response
        })
    }
}

module.exports = { MemberController };