'use strict';

/* insiasi */
const express = require('express');
const router = express.Router();
const { memberRouter } = require('./MemberRouter');
const { packetRouter } = require('./PacketRouter');
const { Controller } = require('../Controller/Controller');

router.get('/', Controller.homePageController);
router.use(memberRouter);
router.use(packetRouter);

module.exports = { router };