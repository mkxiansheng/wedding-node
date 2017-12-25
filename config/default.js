"use strict";

module.exports = {
  port: 4100,
  session: {
    secret: 'wedding',
    key: 'wedding',
    maxAge: 604800
  },
  mongodb: 'mongodb://localhost:27017/noTrace'
};