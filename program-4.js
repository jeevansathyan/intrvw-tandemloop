const inp = require("readline-sync");

let limit = Number(inp.question("Enter the limit of the array : "));
let arr = [];
let multList = [0, 0, 0, 0, 0, 0, 0, 0, 0];

for (i = 0; i < limit; i++) {
  arr.push(Number(inp.question("Enter the number of index " + i + " : ")));
  // arr[i]=inp.question('enter the number of index '+i+' : ')
}
console.log(arr);

let dictionary = {
  1: multList[0],
  2: multList[1],
  3: multList[2],
  4: multList[3],
  5: multList[4],
  6: multList[5],
  7: multList[6],
  8: multList[7],
  9: multList[8],
};

for (i = 0; i < arr.length; i++) {
  if (arr[i] % 1 == 0) {
    dictionary[1]++;
  }
  if (arr[i] % 2 == 0) {
    dictionary[2]++;
  }
  if (arr[i] % 3 == 0) {
    dictionary[3]++;
  }
  if (arr[i] % 4 == 0) {
    dictionary[4]++;
  }
  if (arr[i] % 5 == 0) {
    dictionary[5]++;
  }
  if (arr[i] % 6 == 0) {
    dictionary[6]++;
  }
  if (arr[i] % 7 == 0) {
    dictionary[7]++;
  }
  if (arr[i] % 8 == 0) {
    dictionary[8]++;
  }
  if (arr[i] % 9 == 0) {
    dictionary[9]++;
  }
}

console.log(dictionary);
