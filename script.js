//lines from 2 to 25 are unrelated to this repository
// function goodVsEvil(good, evil) {
//   var accugood = 0;
//   var accuevil = 0;
//   for (let i = 0; i < good.length; i++) {
//     if (good[i] !== '') {
//       accugood += good[i];
//     }
//   }
//   for (let i = 0; i < evil.length; i++) {
//     if (evil[i] !== '') {
//       accuevil += evil[i];
//     }
//   }
//   if (accugood > accuevil) {
//     return 'Battle Result: Good triumphs over Evil', 'Good should win';
//   } else if (accugood < accuevil) {
//     return 'Battle Result: Evil eradicates all trace of Good', 'Evil should win';
//   } else if (accugood === accuevil) {
//     return 'Battle Result: No victor on this battle field, Should be a tie';
//   }


// }
// goodVsEvil('1 1 1 1 1 11', '1 1 1 1 1 11')




//(function() {
//console.log('foo');
//})();


// function cubeOdd(arr) {
//   var notNum = false;
//   var sum = 0;
//   var cubed = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (isNaN(arr[i])) {
//       notNum = true;
//     } else {
//       cubed[i] = arr[i] * arr[i] * arr[i];
//       if (cubed[i] % 2 === 1 || cubed[i] % 2 === -1) {
//         sum += cubed[i];
//       }
//     }

//   }
//   if (notNum) {
//     return undefined;
//   } else {
//     return sum
//   }


// }
// top SOLUTION ON KATA
///////////////////////////////////
// let cubeOdd = a => {
//   var isNumeric = a.every(x => !isNaN(x))
//   return isNumeric ? a.filter(n => n % 2).reduce((s, n) => s + (n * n * n), 0) : undefined
// }

// console.log(cubeOdd(['a', -27, -2, 2, 27]));
// console.log(cubeOdd([-27, -2, 2, 27]));
// console.log(cubeOdd([0, 1, 2, 3]));

// //MY SOLUTION 10/9/2018
// function arithmetic (a, b, operator) {
//   return (
//   operator === "add" ? a + b
//   :operator === "subtract" ? a - b
//   :operator === "multiply" ? a * b
//   :a / b);
// }

// solution from kata ( i think my SOLUTION is a better option ON LInE 69)
// function arithmetic(a, b, operator) {
//   switch (operator) {
//     case 'add':
//       return a + b;
//     case 'subtract':
//       return a - b;
//     case 'multiply':
//       return a * b;
//     case 'divide':
//       return a / b;
//   }
// }

// console.log(arithmetic(1, 2, "add"));
// console.log(arithmetic(8, 2, "subtract"));
// console.log(arithmetic(5, 2, "multiply"));
// console.log(arithmetic(8, 2, "divide"));

// Description: solution found 10/16/2018
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

//     Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of ProjectEuler.net


// function solution(number) {
//     var m3 = []; var m5 = []; var sum = 0;
//     for (let index = 0; index < number; index++) {
//         if (3 * (index + 1) < number) {
//             m3[index] = 3 * (index + 1);
//         }
//         if (5 * (index + 1) < number) {
//             m5[index] = 5 * (index + 1);
//         }
//     }
//     for (let index = 0; index < m3.length; index++)
//         {
//             if (!isNaN(m5[index]) && (!isNaN(m3[index]))) {
//                 if (m3.includes(m5[index])) { sum += m3[index];
//                 }else { sum += m3[index] + m5[index]; }
//             }else { sum += m3[index]; }
//         }
//     return sum;
// }
// console.log(solution(6));

// function test(n, expected) {
//   let actual = solution(n)
//   Test.assertEquals(actual, expected, `Expected ${expected}, got ${actual}`)
// }

// Test.describe("basic tests", function () {
//   test(10, 23)
// })

// kata solution below:
// function solution(number) {
//     var sum = 0;

//     for (var i = 1; i < number; i++) {
//         if (i % 3 == 0 || i % 5 == 0) {
//             sum += i
//         }
//     }
//     return sum;
// }

//=======================================
//11/10/2018
// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn 't an odd number and you don'
// t need to move it.If you have an empty array, you need to
// return it.

// Example

//sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
// console.log(sortArray([]));
// console.log(sortArray([5, 3, 2, 8, 1, 4])); //, [1, 3, 2, 8, 5, 4])
// console.log(sortArray([5, 3, 1, 8, 0])); //, [1, 3, 5, 8, 0])


// function sortArray(array){
//    if (array !== []){
//        let odd = array.filter(function(v){return v % 2 ==1;});
//        odd.sort(function(a,b){return a-b});
//        for (let index = 0; index < array.length; index++) {
//            if (array[index] % 2 == 0){
//             odd.splice(index, 0, array[index]);
//            };
           
//        }
//        return odd;
//    }
//    return ('[]');
// };

// console.log(sortArray([]));
// console.log(sortArray([5, 3, 2, 8, 1, 4]));//, [1, 3, 2, 8, 5, 4])
// console.log(sortArray([5, 3, 1, 8, 0]));//, [1, 3, 5, 8, 0])

//november 20 2018

// var humanYearsCatYearsDogYears = function (humanYears) {
//     let CatYears=15; let DogYears=15;
//     for (let index = 1; index <= humanYears; index++) {
//         if (index === 2 ) { CatYears+=9; DogYears+=9;}
//         else if (index>2){CatYears+=4;DogYears+=5;}
//     }
//     return [humanYears, CatYears, DogYears];
// }

// console.log(humanYearsCatYearsDogYears(1));
// console.log(humanYearsCatYearsDogYears(2));
// console.log(humanYearsCatYearsDogYears(10));

