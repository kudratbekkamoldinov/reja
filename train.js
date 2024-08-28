// TASK-E
function reversing(a) {
  let word = a.split("").reverse().join("");
  return word;
}

console.log(reversing("Joseph"));

// // TASK D
// function checksimilarity(word1, word2) {
//   let sorted1 = word1.split("").sort().join("");
//   let sorted2 = word2.split("").sort().join("");

//   if (sorted1 === sorted2) {
//     return true;
//   }
//   return false;
// }
// console.log(checksimilarity("mit", "mit"));

// const moment = require("moment");

// class Shop {
//   constructor(pizza, burger, pepsi) {
//     this.inventory = {
//       pizza: pizza,
//       burger: burger,
//       pepsi: pepsi,
//     };
//   }

//   getTime() {
//     return moment().format("HH:mm");
//   }

//   qoldiq() {
//     const { pizza, burger, pepsi } = this.inventory;
//     return `Hozir ${this.getTime()} da sizda ${pizza} ta pizza va ${burger} ta burger va ${pepsi} ta pepsi bor.`;
//   }

//   sotish(nomi, soni) {
//     if (!(nomi in this.inventory)) {
//       return "Mahsulot mavjud emas";
//     }

//     if (this.inventory[nomi] === 0) {
//       return `${nomi.charAt(0).toUpperCase() + nomi.slice(1)} qolmadi`;
//     }

//     if (this.inventory[nomi] < soni) {
//       return `Bunday miqdorda ${nomi} mavjud emas`;
//     }

//     this.inventory[nomi] -= soni;
//     return `Hozir ${this.getTime()} da ${soni} ${nomi} oldingiz!`;
//   }

//   qabul(nomi, soni) {
//     if (!(nomi in this.inventory)) {
//       return "Mahsulot mavjud emas";
//     }

//     this.inventory[nomi] += soni;
//     return `Hozir ${this.getTime()} da ${soni} ${nomi} qabul qildingiz!`;
//   }
// }

// // Example usage:
// const story = new Shop(18, 22, 50);
// console.log(story.qoldiq());
// console.log(story.qabul("burger", 10));
// console.log(story.qoldiq());

// // TASK B
// function countDigits(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (!isNaN(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countDigits("shh32r42"));

// //   A TASK
// function atask(w, word) {
//     let count = 0;

//     for (const char of word) {
//       if (char === w) {
//         count++;
//       }
//     }

//     return count;
//   }

//   console.log(atask("w", "wolf or wolverine"));

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba boling", // 0-20
//   "togri boshliq tanlang va koproq hatto qiling", // 20-30
//   "uzingizga ishlashingizni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yoq endi", // 60
// ];

// function maslahatbering(a, callback) {
//   if (typeof a !== "number") callback("Insert number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }

// console.log("passed here 0");
// maslahatbering(44, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });

// console.log("passed here 1");

// //  ASYNC function
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("Insert number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       // setTimeout(() => {
//       setInterval(() => {
//         resolve(list[5]);
//       }, 1000);
//     });
//     //     setTimeout(function () {
//     //       callback(null, list[5]);
//     //     }, 5000);
//   }
// }

// // // call via then/catch
// // console.log("passed here 0");
// // maslahatbering(25)
// //   .then((data) => {
// //     console.log("javob:", data);
// //   })
// //   .catch((err) => {
// //     console.log("ERROR", err);
// //   });
// // console.log("passed here 1");

// // asyn/await
// async function run() {
//   let javob = await maslahatBering(65);
//   console.log(javob);
//   // javob = await maslahatBering(70);
//   // console.log(javob);
//   // javob = await maslahatBering(45);
//   // console.log(javob);
// }
// run();
