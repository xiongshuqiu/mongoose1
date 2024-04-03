const connectDb = require("./dbConnection");
const elderly = require("./elderlyModel");

const prod1 = elderly.create({
        departmentNumber: "D02",
        elderlyNumber: "E006",
        elderlyName: "liguoqing",
        gender: "male",
        age: 74,
        elderlyPhone: 15920453540,
        checkInDate: "2022-07-21",
        roomNumber: 102,
        responsibleDoctor: [
          "lijia",
          "zhangdan"
        ],
        familyInformation: {
          name: "liguangjie",
          phone : 13895642145,
          relation: "daughter"
        }
      }
);

console.log(`get ${prod1}`);

connectDb();
