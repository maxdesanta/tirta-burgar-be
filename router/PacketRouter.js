'use strict';

/* insiasi */
const express = require('express');
const packetRouter = express.Router();
const { PacketController } = require('../Controller/PacketController');

// router parameters
packetRouter.get('/packets', PacketController.getPacketController)
// packetRouter.get('/member/:id', MemberController.getMemberController);
packetRouter.post('/packet/add', PacketController.addPacketController);
// packetRouter.put('/member/edit/:id', MemberController.getMemberController);
// packetRouter.delete('/member/delete/:id', MemberController.getMemberController);

module.exports = { packetRouter };