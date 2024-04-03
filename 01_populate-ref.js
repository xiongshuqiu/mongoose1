//1.导入连接函数封装对象、文档数据结构及模型封装对象
const connectDb = require("./dbConnection");
const divisional_management = require("./models/divisional_managementModel");
//2.定义一个async（异步操作） 函数名称为getElderly
async function getManagement() {
    const prod1 = await divisional_management
        .findOne({departmentName:"department of the elderly"})
        . populate('{departmentNumber"D02"')
        .exec();

    //console.log(`get ${prod1.suppliers}`);
    console.log(`get ${prod1}`);   //console.log(`prod1`)输出结果是prod1
}
//3.连接、执行查找函数操作
connectDb();
getManagement();
// https://github.com/Zbjfei/shareCharts.git