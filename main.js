// 4.1

/* const arrayOne = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(`მასივის სიგრძე:${arrayOne.length}`); */

// 4.2

/* let arr = ["a", "b", "c"];

arr[3] = "d";
arr.splice(1, 1, "x");

console.log(arr); */

// 4.3

/* let arr2 = [];

arr2.push("a", "b", "c");

console.log(arr2); */

// 4.4

/* let arr3 = [1, 2, 3, 4, 5];
let key1 = 1;
let key2 = 2;

key1 += arr3[1];
key2 += arr3[2];

console.log(`key1 = ${key1}  key2 = ${key2}`); */

// 4.5

/* let arr4 = ["a", "b", "c", "d", "e"];

delete arr4[2];
delete arr4[4];

let changeArrayLength = arr4.some((item) => item === undefined);

console.log(`მასივის სიგრძეა ${arr4.length}`);
console.log(arr4);
console.log(`შეიცვალა თუ არა მასივის სიგრძე? ${changeArrayLength}`); */

// 4.6

/* let names = ["ხვიჩა", "გოგა", "მაკა", "ანა", "ინა"];
let alphabetNames = [];

names.forEach(myFunction);

function myFunction(item) {
  alphabetNames.push(item);
}

alphabetNames.sort();
console.log(alphabetNames);

alphabetNames.reverse();
console.log(alphabetNames); */

// 4.6

/* let arr = [11, 22, 33, 44, 55];
console.log(arr[arr.length - 1]); */

// 4.7

/* let arr = [10, 11, 12, 13, 14];
console.log(arr.length); */

// 4.8

/* let arr = [10, 11, 12, 13, 14];
console.log(arr.length); */

// 4.9

/* const getBlankArray = () => [];

console.log(getBlankArray()); */

// 4.10

/* let arr = [10, 11, 12, 13, 14];

let getNumOfComponents = (components) => components.length;

console.log(getNumOfComponents(arr)); */

// 4.11

/* let arr = [10, 11, 12, 13, 14];

let priceSum = (total, item) => (total += item);

console.log(arr.reduce(priceSum)); */

// 4.12

/* let toys = ["ოვერბორდი", "პაზლი", "Lego"];

let addBoll = (arr) => {
  arr.push("ბურთი");
  return arr;
};

console.log(addBoll(toys)); */

// 4.13

/* let toys = ["ოვერბორდი", "პაზლი", "Lego"];
let toy = "Yo-yo";

let addToy = (toys, toy) => {
  toys.push(toy);
  return toys;
};

console.log(addToy(toys, toy)); */

// 4.14

/* let toys = ["ოვერბორდი", "პაზლი", "Lego", "Yo-yo"];

let getLastToy = (arr) => arr[arr.length - 1];

console.log(getLastToy(toys)); */
