// const func2 = (str) => str;
// console.log(func2("aaaa"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(1, 3));

// const myProfile = {
//   name: "BBBBB",
//   age: 28
// };

// // const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// // console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const sayHello = (name) => console.log(`こんにちは${name}さん`);
// sayHello("石森");

// const arr1 = [1, 2, 3];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// // まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピー
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * map filter を使った配列
 */
// const nameArr = ["a", "b", "c"];
// // for (let index = 0; index < nameArr.length; index++) {
// //   console.log(nameArr[index]);
// // }

// // const nameArr2 = nameArr.map((name) => {
// //   return name;
// // });
// // console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// const foodList = {
//   オムライス: 450,
//   やきそば: 500,
//   お好み焼き: 600,
//   焼き飯: 700
// };
// const order = ["オムライス", "焼き飯"];

// const result1 = order.map(function (value) {
//   return this[value];
// }, foodList);
// console.log(result1);

// const result2 = order.map((value) => {
//   return this[value];
// }, foodList);

// console.log(result2);

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });

// console.log(newNumArr);

// const nameArr = ["a", "b", "c"];
// const newNameArr = nameArr.map((name) => {
//   if (name === "a") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がFalseの時

// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = "1300";
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力して下さい";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています。" : "許容範囲内です";
// };
// console.log(checkSum(100,30))

/**
 * 論理演算子
 */
// const flag1 = true;
// const flag2 = true;
// if (flag1 || flag2) {
//   console.log("aaa");
// }

// if (flag1 && flag2) {
//   console.log("bbb");
// }

// || は左側がfalseなら右側を返す
const num = null;
const fee = num || null;
console.log(fee);

// && は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "なにか設定されました";
console.log(fee2);
