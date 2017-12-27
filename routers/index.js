"use strict";

module.exports = function (app) {
	const url = (process.env.NODE_ENV === "development") ? '' : '/api/wedding';
	console.log(url);
    app.get(url + '/api/wedding', function (req, res) {
            res.send('api wedding');
    });

	app.get('/', function (req, res) {
		res.send('hello world');
	});

	// 登录
	app.use(url + '/login', require('./user/login'));
	// 婚礼列表
	app.use(url + '/weddingList', require('./wedding/wedding-list'));
	// banner列表
	app.use(url + '/bannerList', require('./wedding/banner-list'));
	// 婚礼详情
	app.use(url + '/weddingDesc', require('./wedding/wedding-desc'));
	// 婚礼弹幕
	app.use(url + '/weddingDescDanMu', require('./wedding/wedding-desc-danmu'));
	// 添加弹幕
	app.use(url + '/addDanmu', require('./wedding/add-danmu'));

};
