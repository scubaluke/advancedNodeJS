// function fizzBuzz(n){
//     for(let i = 1; i <= n; i++) {
//        if (i%3 === 0 && i%5 === 0 ) {
//         console.log('fizzbuzz');
//     } else if(i%3=== 0 ){
//         console.log('fizz');
//     } else if (i%5 === 0) {
//         console.log('buzz');
//     } else {
//         console.log(i);
//     }
//     }
// }
// console.log(fizzBuzz(15));
// console.log(fizzBuzz(22));

// function chunk(array, size) {
//     // create empty  array to hold chunks
//     let chunked = []
//     // for each element of original array
//     for (let element of array)  {
//       // retrieve the last element in chunked
//         const last = chunked[chunked.length-1]
//          // if last element does not exist, or if its length is equal to chunked size
//          // push a new chunk into 'chunked' with  the current element
//          if (!last || last.length  === size) {
//              chunked.push([element])
//          // else add the current element into the chunk. 
//          } else {
//             last.push(element)
//         }
//     }
  
//     return chunked
// }

// function chunk(array, size) {
//     // create empty chunked array
//     let chunked = []
//     //  create 'index' start at 0
//     let index = 0
//     // while index is less then  array.length 
//     while (index <  array.length) {
//         // push a slice of length 'size' from 'array' into chunked
//         chunked.push(array.slice(index, index + size))
//         //  add 'size' to index
//         index += size
//     }
//     return chunked
// }

// console.log(chunk([1,2,3,4,5],2));
// console.log(chunk([1,2,3,4,5,6, 7, 8],3));
// console.log(chunk([1,2,3,4,5],10));

// function createMap(string) {
//     const obj = {}
//      // remove spaces and punctuation
//     const removed = string.toLowerCase().replace(/[^\w]/g, '').split('')
//     for (letter of removed) {
//         obj[letter] = obj[letter] + 1 || 1
//     }
//     return obj
// }

// function anagrams(stringA, stringB) {
   
//   const  objA = createMap(stringA)
//   const objB = createMap(stringB)
    
//     // compare the objects
//     // console.log(objA, objB);
//     // console.log(Object.keys(objA).length, Object.keys(objB).length);
//     if(Object.keys(objA).length !== Object.keys(objB).length) {
//         return false
//     }
//     for (let char in objA) {
//         if (objA[char] !== objB[char]) {
//             return false
//         }
//     }
//     return true
// }
// function sortStrings(string) {
//      // remove spaces and punctuation
//    return string.toLowerCase().replace(/[^\w]/g, '').split('').sort().join('')
   
// }

// function anagrams(stringA, stringB) {
//    const strA = sortStrings(stringA)
//     const strB = sortStrings(stringB)
//     console.log(strA,  strB);
//     if (strA === strB) {
//         return true
//     }
//     return false
// }

// console.log(anagrams('rail', 'rail'));
// console.log(anagrams('rail SAFETY!', 'fairy tales'));
// console.log(anagrams('hi there', 'by there'));

// function capitalization(string) {
//    return string.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)} `
//    ).join('').trim()
// }

// function capitalization(string) {
//    let result = ''
//    for (let i = 0; i < string.length; i++) {
//       if(string[i-1] === ' ' || !string[i-1]) {
//         result  += string[i].toUpperCase()
//       } else {
//          result += string[i]
//       }
//    }
//    return result
// }
// console.log(capitalization('here is a sentience.'));

// function steeps(n) {
//    let  steep = 1

//    for (let row = 0; row < n; row++) {
//       let hold  = ''

//      // if first or steep less then  iteration clg #
//      // else clg ' '
//       for (let col  = 0; col < n; col++) {
//          // console.log(row, col);
//          if (col <= row) {
//             hold += '#'
//          } else {
//             hold += '.'
//          }
//       }
//     console.log(hold);
//    }
// }
// console.log(steeps(2));
// console.log(steeps(5));

// function revNum(x) {
//    return par x.toString().split('').reverse().join('') * Math.sign(x)
// }
// console.log(revNum(123));

// var longestCommonPrefix = function(strs) {
   // create variable of first word in array
   // for (let word = 0; word < strs.length; word++) {
   //    console.log(word);
   //    // console.log(strs[word]);
   //    for (let letter  = 0; letter < word.length;  letter++)
   //    console.log(letter);
   //    // console.log(word[letter]);
   // }
//    let result = ''
//    for (let  word = 0; word<strs.length; word++) {
//       for (let letter = 0; letter<strs[word].length; letter++) {
//          console.log(strs[word][letter]);
//          // if((strs[word][letter]===strs[word+1][letter])) {
//          //    result += strs[word][letter]
//          // }
//          // console.log(strs[word][letter]===strs[word+1][letter]);
//       }
//    }
//   return result
   
// };
// console.log(longestCommonPrefix(["flower","flow","flight"]));
