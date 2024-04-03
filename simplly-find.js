//1.导入连接函数封装对象、文档数据结构及模型封装对象
const connectDb = require("./dbConnection");
const elderly = require("./models/elderlyModel");

//2.定义一个async（异步操作） 函数名称为getElderly
async function getElderly() {
    const prod1 = await elderly.find();  //elderly是文档模型对象,await只能在async内部使用，find是查找函数

    console.log(`get ${prod1}`); //输出结果
}
//3.连接、执行查找函数操作
connectDb();

getElderly();
