//1.导入连接函数封装对象、文档数据结构及模型封装对象
const connectDb = require("./dbConnection");
const elderly = require("./models/elderlyModel");

//2.定义插入文档函数：updateElderly(){try{} catch(){}},updateElderly只是函数名称可以任意取
  async function updateElderly(){
  try{  const prod1 = await elderly    //执行try{}
    .updateMany(
      {"elderlyName":"liguoqing"},
      { "age": 70,"elderlyPhone": 15920453539}
      )
      const prod2 = await elderly    //执行try{}
      .find({
        "elderlyName":"liguoqing"
      })
      console.log(`get ${prod2}`);   //console.log(`prod2`)输出结果是prod2
  }
catch(err){                     //try{}执行不成功时，执行catch（）
  console.log("insert err")
}}

//3.执行连接、文档插入函数
connectDb();
updateElderly();