//1.导入连接函数封装对象、文档数据结构及模型封装对象
const connectDb = require("./dbConnection");
const elderly = require("./models/elderlyModel");
//2.定义一个async（异步操作） 函数名称为getElderly
async function getElderly() {
    const prod1 = await elderly
        .findOne({elderlyName: 'liyi' })
        .select({elderlyName:1,familyInformation:1})
        .exec();

    //console.log(`get ${prod1.suppliers}`);
    console.log(`get ${prod1}`);
}
//3.连接、执行查找函数操作
connectDb();
getElderly();