'use strict';

/* insiasi */
const express = require('express');
const packetRouter = express.Router();
const { PacketController } = require('../Controller/PacketController');

// router parameters
packetRouter.get('/packets', PacketController.getPacketController)
packetRouter.get('/packet/:id', PacketController.getDetailPacketController);
packetRouter.post('/packet/add', PacketController.addPacketController);
packetRouter.put('/packet/edit/:id', PacketController.updatePacketController);
packetRouter.delete('/packet/delete/:id', PacketController.deletePacketController);

module.exports = { packetRouter };