var config = {
  // debug 为 true 时，用于本地调试
  debug: true,
  session_secret: 'contact_secret', // 务必修改
  db: 'mongodb://127.0.0.1/contact',
  db_name: 'contact'
 }
 module.exports = config;