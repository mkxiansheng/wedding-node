"use strict";

const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
	console.log('get weddingList');

	let ret = {
		code: 0,
		Json: [{
            id: '00000001',
            name: '汪峰和章子怡的婚礼',
            time: '12：30：55',
            locat: '天上人间',
            img: '../../public/newlover.png'
          },{
            id: '00000002',
            name: '55开和uu的婚礼',
            time: '12：30：55',
            locat: '山水假日',
            img: '../../public/newlover.png'
          },{
            id: '00000003',
            name: '宋仲基和宋慧乔的婚礼',
            time: '12：30：55',
            locat: '维亚纳',
            img: '../../public/newlover.png'
          },{
            id: '00000004',
            name: '赵又廷和高圆圆的婚礼',
            time: '12：30：55',
            locat: '帝豪大酒店',
            img: '../../public/newlover.png'
          },{
            id: '00000005',
            name: '张杰和谢娜的婚礼',
            time: '12：30：55',
            locat: '尊爵大酒店',
            img: '../../public/newlover.png'
          },{
            id: '00000006',
            name: '杜海涛和沈梦辰的婚礼',
            time: '12：30：55',
            locat: '香格里拉大酒店',
            img: '../../public/newlover.png'
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