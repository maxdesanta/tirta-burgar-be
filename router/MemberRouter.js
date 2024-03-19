'use strict';

/* insiasi */
const express = require('express');
const memberRouter = express.Router();
const { MemberController } = require('../Controller/MemberController');

// router parameters
memberRouter.get('/members', MemberController.getMemberController);
memberRouter.get('/member/:id', MemberController.getDetailMemberController);
memberRouter.post('/member/add', MemberController.addMemberController);
memberRouter.put('/member/edit/:id', MemberController.editMemberController);
memberRouter.delete('/member/delete/:id', MemberController.deleteMemberController);

module.exports = { memberRouter };