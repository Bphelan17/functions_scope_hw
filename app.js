// 1.1. What is the difference between a parameter and an argument?
// a function parameter is the defintion of a function
//a function argument is the value which passes through a function
// 1.2. Within a function, what is the difference between return and console.log?
// return displays the value from a function, while console.log prints variables and messages.
// 1. 3. What are the implications of the ability of a function to return a value?
// the implications are that the function has completed its task when returning a vlaue, allowing the computer to understand the argument. 

// 2. calculateCube

// function calculateCube(volume) {
//     for(let x = 0; x < volume.num; x*) {

//     }

// }
   

// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE
    let vowel = 'aeiouAEIOU';
    for(let x = 0; x < letter.length; x++) {
        if (letter === 'aeiouAEIOU') {
            return 'true';
        } else {
            return 'false';
        }
    }
} 
            console.log(isAVowel("k"));


// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
    let word1 = 'Hank, Hippopalous'
    for(let word1 = 0; word1 < word1.length; x++) {
        if (word1 === 'Hank') {
            return word1.length;
       } else {
        return word2.length;
       }
    }
}
        console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5. sumArray

function sumArray(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
    console.log(sumArray([1, 2, 3, 4, 5, 6]));


// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
}

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
}

// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
}

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    // YOUR CODE HERE
}

// 9. findNeedle
function findNeedle(arr) {
    // YOUR CODE HERE
}

// 10. sumPositive
function sumPositive(arr) {
    // YOUR CODE HERE
}

// module.exports = {
//     calculateCube,
//     isAVowel,
//     getTwoLengths,
//     sumArray,
//     checkPrime,
//     printPrimes,
//     printLongestWord,
//     eulerFibo,
//     findNeedle,
//     sumPositive
// };