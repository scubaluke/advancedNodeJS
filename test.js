// const reverse = str => {
//     let result = ''

//     for(let letter of str) {
//         result = letter + result
//         console.log(result)
//     }
//     return result
// }
// reverse('this is a string')

// const reverse = str => 
//     str.split('').reduce((acc, letter) => 
//         letter + acc, '')

// console.log(reverse('this is a string'));

// const palindrome  = str => {
//     const reversed = str.split('').reverse().join('')
//         return reversed === str
// }
// console.log(palindrome('mom'));

// const palindrome  = str => {
//    return str.split('').every((letter, i) => {
//         return letter === str[str.length - i - 1]
//     })
// }
// console.log(palindrome('mom'));

// function reverseInt(n) {
//    return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
// }
// console.log(reverseInt(51));
// console.log(reverseInt(-90));
// console.log(reverseInt(0));

// function maxChar(str) {
//     let chars = {}
//     for (char of str)  {
//        chars[char] = chars[char] + 1 || 1
//     }
// return chars
// }

// function maxChar(str) {
//     let chars = {}
//    str.split('').forEach(element => {
//        chars[element] = chars[element] + 1  || 1
//    });
//    let mostUsedCount = 0
//    let mostUsedLetter = ''
//    for(let letter in chars) {
//     if (chars[letter] > mostUsedCount) {
//         mostUsedCount = chars[letter]
//         mostUsedLetter = letter
//     }
//    }
//    return  mostUsedLetter
// }
// console.log(maxChar('string'));
// console.log(maxChar('abcccc'));
// console.log(maxChar('apple 123111'));

function fizzBuzz(n){
    for(let i = 1; i <= n; i++) {
       if (i%3 === 0 && i%5 === 0 ) {
        console.log('fizzbuzz');
    } else if(i%3=== 0 ){
        console.log('fizz');
    } else if (i%5 === 0) {
        console.log('buzz');
    } else {
        console.log(i);
    }
    }
}

function fizzBuzz2()  {
    for (let i = 1; i <=n; i ++) {
        // Is the number multiple of 3 & 5?
        // Is the number multiple of 3?
        // Is the number multiple of 5?
    }
}
console.log(fizzBuzz(15));
console.log(fizzBuzz(22));