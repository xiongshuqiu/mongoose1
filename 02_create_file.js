//1.导入连接函数封装对象、文档数据结构及模型封装对象
const connectDb = require("./dbConnection");
const elderly = require("./models/elderlyModel");

//2.定义插入文档函数：insertelderly(){try{} catch(){}}
  async function insertelderly(){
  try{  const prod1 = await elderly    //执行try{}
    .create(
      {
      "departmentNumber": "D02",
      "elderlyNumber": "E006",
      "elderlyName": "liguoqing",
      "gender": "male",
      "age": 74,
      "elderlyPhone": 15920453540,
      "checkInDate": "2022-07-21",
      "roomNumber": 102,
      "responsibleDoctor": [
        "lijia",
        "zhangdan"
      ],
      "familyInformation": {
        name: "liguangjie",
        phone : 13895642145,
        relation: "daughter"
      }
    })
    //console.log(`get ${prod1}`);
    console.log( `get ${prod1}`);    //console.log(`prod1`)输出结果是prod1
  }
catch(err){                     //try{}执行不成功时，执行catch（）
  console.log("insert err")
}}

//3.执行连接、文档插入函数
connectDb();
insertelderly();