'use strict';

const { Model } = require('../Model/Model');

class Controller {
    static homePageController(req, res) {
        const response = Model.homePageModel();
        res.json({
            message: response
        })
    }
}

module.exports = { Controller };