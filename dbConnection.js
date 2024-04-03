//1.导入mongoose
const mongoose = require("mongoose");
//2.连接mongodb数据库
const CONNECTION_STRING = 
'mongodb://xshq:xshq1023@isit.my.to:27017/xiongshuqiu?authSource=xiongshuqiuDB'
//3.设置回调
const connectDb = async () => {
  try {                         //连接成功时显示
    console.log(CONNECTION_STRING);

    const connect = await mongoose.connect(CONNECTION_STRING, {
      useNewUrlParser: true
    });

    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {       //连接失败时显示
    console.log(err);
    process.exit(1);
  }
};
//4.暴露函数connectDb
module.exports = connectDb;

