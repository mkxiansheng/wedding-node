"use strict";

module.exports = function (app) {
	app.get('/', function (req, res) {
		res.send('hello world');
	});

	// 登录
	app.use('/login', require('./user/login'));
	// 婚礼列表
	app.use('/weddingList', require('./wedding/wedding-list'));
	// banner列表
	app.use('/bannerList', require('./wedding/banner-list'));
	// 婚礼详情
	app.use('/weddingDesc', require('./wedding/wedding-desc'));
	// 婚礼弹幕
	app.use('/weddingDescDanMu', require('./wedding/wedding-desc-danmu.js'));
};