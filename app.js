"use strict";

const express = require('express');

const bodyParser = require('body-parser');

const session = require('express-session');

const MongoStore = require('connect-mongo')(session);

const config = require('./config/default');

const routers = require('./routers');

const app = express();

// 环境判断
console.log(process.env.NODE_ENV)
const isDev = process.env.NODE_ENV === "development";
if (isDev) {
	console.log("development")
}

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(session({
  name: config.session.key,// 设置 cookie 中保存 session id 的字段名称
  secret: config.session.secret,// 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
  resave: true,// 强制更新 session
  saveUninitialized: false,// 设置为 false，强制创建一个 session，即使用户未登录
  cookie: {
    maxAge: config.session.maxAge// 过期时间，过期后 cookie 中的 session id 自动删除
  },
  store: new MongoStore({// 将 session 存储到 mongodb
    url: config.mongodb // mongodb 地址
  })
}));

// 托管静态资源
app.use(express.static('public'));

routers(app);

app.listen(config.port);