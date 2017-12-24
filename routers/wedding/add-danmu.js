"use strict";

const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
	console.log('get add-danmu');
    let ret = {
        code: -1
    }
    res.send(ret);
});

router.post('/', function (req, res) {
	console.log(req.body);

	let ret = {
		code: 0, // 0成功 -1 异常
	}

	res.send(ret);
});

module.exports = router;