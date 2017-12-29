"use strict";

const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
	console.log('get weddingList');

	let ret = {
		code: 0,
		Json: [{
            id: '00000001',
            name: '叶先生和郑女士的婚礼',
            time: 1514692800000,
            locat: '天上人间',
            img: 'loves/newlover.png'
          }]
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