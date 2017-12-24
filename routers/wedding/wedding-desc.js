"use strict";

const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
	console.log('get weddingDesc');

    if (req.query.id) {
    	let ret = {
    		code: 0,
    		Json: {
                name: '汪峰和章子怡的婚礼',
                // video: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
                video: 'video/test.mp4',
                user: {
                    name: 'mk先生',
                    avatar: 'logo/user-logo.jpeg'
                }
            }
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