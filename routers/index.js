"use strict";

module.exports = function (app) {
	app.get('/', function (req, res) {
		res.send('hello world');
	});

	// 登录
	app.use('/login', require('./user/login'));
};