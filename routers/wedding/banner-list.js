"use strict";

const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
	console.log('get bannerList');

	let ret = {
		code: 0,
		Json: [{
            id: '00000001',
            index: 0,
            img: 'banner/banner-1.jpg'
          }, {
            id: '00000002',
            index: 1,
            img: 'banner/banner-2.jpg'
          }, {
            id: '00000003',
            index: 2,
            img: 'banner/banner-3.png'
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