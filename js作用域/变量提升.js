console.log(fish1, fish2, fish3);
var fish1 = function () {
  console.log("welcome to fish");
};
function fish2() {
  console.log("welcome to fish2");
}
var fish3 = "welcome to fish3";
var fish1,fish2,fish3;
console.log(fish1, fish2, fish3);
// 考验的是变量提升
// 先提升var 再提升function
