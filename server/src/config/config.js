/**
 * 默认配置
 * @author yupi
 */
module.exports = {
  redisConfig: {
    host: "150.158.90.20",
    port: "6379",
    password: "123456",
    db: 2,
  },
  // MySQL 配置
  dbConfig: {
    database: "yuindex",
    username: "root",
    password: "yyloveyy123",
    host: "150.158.90.20",
    port: 3306,
  },
  // 百度翻译配置，自行申请免费版即可（https://fanyi-api.baidu.com/）
  baiduFanYiConfig: {
    appid: "",
    key: "",
  },
};
