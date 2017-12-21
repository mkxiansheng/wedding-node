"use strict";

const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
	console.log(11);
	let ret = {
		code: 0
	}
	res.send(ret);
});

router.post('/', function (req, res) {
	console.log(req.body);
	let ret = {
		code: 0 // 0成功 -1 账户或密码错误
	}

	res.send(ret);
});

module.exports = router;