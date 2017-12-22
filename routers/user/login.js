"use strict";

const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
	console.log('get login');

	let ret = {
		code: 0
	}
	res.send(ret);
});

router.post('/', function (req, res) {
	console.log(req.body);

	// 需要用Code到微信服务器换取session_key
	// 请求地址 https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code

	// //正常返回的JSON数据包
	// {
	//       "openid": "OPENID",
	//       "session_key": "SESSIONKEY",
	//       "unionid": "UNIONID"
	// }
	// //错误时返回JSON数据包(示例为Code无效)
	// {
	//     "errcode": 40029,
	//     "errmsg": "invalid code"
	// }

	// 为了开发,先模拟数据
	let ret = {
		code: 0, // 0成功 -1 账户或密码错误

		openid: "OPENID"
	}

	res.send(ret);
});

module.exports = router;