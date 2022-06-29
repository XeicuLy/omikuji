// const randomNum = Math.floor(Math.random() * 5);

// if (randomNum === 0) {
//   alert("小吉");
// } else if (randomNum === 1) {
//   alert("大吉");
// } else if (randomNum === 2) {
//   alert("中吉");
// } else if (randomNum === 3) {
//   alert("凶");
// } else if (randomNum === 4) {
//   alert("大凶");
// }

function omikuji() {
  let arry = ["大吉", "中吉", "小吉", "凶", "大凶"];
  let value = arry[Math.floor(Math.random() * arry.length)];
  return value;
}

const returnValue = omikuji();
alert(returnValue);
