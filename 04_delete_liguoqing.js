//1.导入连接函数封装对象、文档数据结构及模型封装对象
const connectDb = require("./dbConnection");
const elderly = require("./models/elderlyModel");

//2.定义插入文档函数：insertelderly(){try{} catch(){}}
  async function deleteElderly(){
  try{  const prod1 = await elderly    //执行try{}
    .deleteMany(
      {
        "elderlyName":"liguoqing"
        }
      )
    console.log(`删除成功`);
  }
catch(err){                     //try{}执行不成功时，执行catch（）
  console.log("delete err")
}}

//3.执行连接、文档插入函数
connectDb();
deleteElderly();