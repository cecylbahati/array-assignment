//find the last element in array
let array1=[3,7,34,90,12];
let array2=["true","green","where",12,56];
console.log(array1[array1.length-1]);
console.log(array2[array2.length-1]);

//join array elements into a string
let mypet=["cow","bird","snake","dog",];
let petstring=mypet.join(",");
console.log(petstring);

//sort array items
let arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
arr3.sort((a, b) => a - b);
console.log(arr3);

//remove duplicates and console the array
let arr = ["boy", "man", "girl", "school", "girl", "woman"];
let newarr = [...new Set(arr)];
let duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log(newarr); 
console.log(duplicates); 

// search for a word in the array
let arr4 = ["the", "way", "x", 4];
let searchword = "food";
let result = arr4.includes(searchword) ? searchword : "None";
console.log(result);

//sort a string
let word = "renniw";
let newword = word.split("").sort().join("");
console.log(newword);

//inserting at the fifth index in array with the length of 10
let fruits = ["grapes", "banana", "apple", "watermelon", "pineapple", "plams", "mangoes", "dates", "guava", "melon"];
fruits[4] = "tomato"; 
console.log(fruits);