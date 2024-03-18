'use strict';

/* insiasi */
const express = require('express');
const memberRouter = express.Router();
const { MemberController } = require('../Controller/MemberController');

// router parameters
memberRouter.get('/members', MemberController.getMemberController);
// memberRouter.get('/member/:id', MemberController.getMemberController);
// memberRouter.post('/member/add', MemberController.getMemberController);
// memberRouter.put('/member/edit/:id', MemberController.getMemberController);
// memberRouter.delete('/member/delete/:id', MemberController.getMemberController);

module.exports = { memberRouter };