"use strict";

const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
	console.log('get weddingDesc');

    if (req.query.id) {
    	let ret = {
    		code: 0,
    		Json: [{
                name: 'mk先生',
                img: 'logo/user-logo.jpeg',
                text: '第 1s 出现的弹幕',
                color: '#ff0000',
                time: 1
              },
              {
                name: '林冲',
                img: 'logo/user-logo.jpeg',
                text: '第 10s 出现的弹幕',
                color: '#ff0000',
                time: 10
              },
              {
                name: '南山吴彦祖',
                img: 'logo/user-logo.jpeg',
                text: '第 100s 出现的弹幕',
                color: '#ff0000',
                time: 100
              },
              {
                name: '王府井',
                img: 'logo/user-logo.jpeg',
                text: '第 160s 出现的弹幕',
                color: '#ff0000',
                time: 160
              },
              {
                name: '熊猫大侠',
                img: 'logo/user-logo.jpeg',
                text: '第 9s 出现的弹幕',
                color: '#ff0000',
                time: 9
              },
              {
                name: '哎约喂',
                img: 'logo/user-logo.jpeg',
                text: '第 15s 出现的弹幕',
                color: '#ff0000',
                time: 15
              },
              {
                name: '吓死宝宝了',
                img: 'logo/user-logo.jpeg',
                text: '第 22s 出现的弹幕',
                color: '#ff0000',
                time: 22
              },
              {
                name: '北斋',
                img: 'logo/user-logo.jpeg',
                text: '第 3s 出现的弹幕',
                color: '#ff00ff',
                time: 3
            }]
    	}
    	res.send(ret);
    } else {
        let ret = {
            code: -1
        }
        res.send(ret);
    }
});

router.post('/', function (req, res) {
	console.log(req.body);

	let ret = {
		code: 0, // 0成功 -1 异常
	}

	res.send(ret);
});

module.exports = router;