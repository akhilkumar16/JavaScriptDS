//Generates 10 Random 3 Digit number//
console.log("\n Problem1 ")
function getThreeDigitRandomNumber() {
    return Math.floor((Math.random() * 900) + 100);
}
let elementArray = new Array();
//second largest and second smallest//
let findLargestAndSmallest = () => {
    for (let i = 0; i < 10; i++)
        elementArray[i] = getThreeDigitRandomNumber();
    console.log("The Ten 3 digits numbers are: " + elementArray.toString());
    let firstLargest = 0, secondlargest = 0;
    let firstSmallest = 1000, secondSmallest = 1000;
    for (let i = 0; i < elementArray.length; i++) {
        if (elementArray[i] > firstLargest) {
            secondlargest = firstLargest;
            firstLargest = elementArray[i];
        }
        else if (elementArray[i] > secondlargest && elementArray[i] != firstLargest)
            secondlargest = elementArray[i];
    }
    for (let i = 0; i < elementArray.length; i++) 
        if (elementArray[i] < firstSmallest) {
            secondSmallest = firstSmallest;
            firstSmallest = elementArray[i];
        }
        else if (elementArray[i] < secondSmallest && elementArray[i] != firstSmallest)
            secondSmallest = elementArray[i];
    console.log(secondSmallest != 1000 ? `Second smallest = ${secondSmallest}` : `There is no second smallest`);
    console.log(secondlargest != 0 ? `Second largest = ${secondlargest}` : `There is no second largest`); 
//find the 2nd largest and the 2nd smallest element//
console.log("\nProblem 2")
let numArray = new Array();
for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * 900) + 100;
    numArray.push(num);
}
console.log("Sorted Array are... ");
console.log(numArray.sort());
console.log("Second largest after sorting : " + numArray.slice(-2, -1));
console.log("Second smallest after sorting : " + numArray[1]);
let maxNum = 0;
let minNum = 1000;
let max2 = 0;
let min2 = 1000;
for (let element of numArray) {
    maxNum = Math.max(element, maxNum);
    minNum = Math.min(element, minNum);
}
for (let element of numArray) {
    max2 = (element < maxNum && element > max2) ? element : max2;
    min2 = (element > minNum && element < min2) ? element : min2;
}
console.log("Second largest without sorting : " + max2);
console.log("Second smallest without sorting : " + min2);
//Prime Factorization Program//
console.log("\nProblem 3")
function getPrimeFactors(number) {
    let array = new Array();
    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            let count = 0;
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j == 0) count++;
            }
            if (count == 0 && i > 1) array.push(i);
        }
    }
    return array;
}
let number = Math.floor(Math.random() * 1000);
console.log("Prime Factors of " + number + " are : ");
console.log(getPrimeFactors(number));
//Sum of three Integer adds to zer0//
console.log("\n Problem 4")
let sumToZero = () => {
    console.log("Program to find sum of three digits add to zero");
    let digitsArr = [0, -1, 2, -3, 1];
    let n = digitsArr.length;
    let found = false;
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (digitsArr[i] + digitsArr[j] + digitsArr[k] == 0) {
                    console.log(`${digitsArr[i]}, ${digitsArr[j]}, ${digitsArr[k]}`);
                    found = true;
                }
            }
        }
    }
    if (found == false) {
        console.log("Not Exists");
    }
}
sumToZero();
console.log("\n another method")
arr = [0, -1, 2, -3, 1];
function findTriplets(arr) {
    let found = false;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] == 0) {
                    console.log(arr[i], arr[j], arr[k]);
                    found = true;

                }
            }
        }
        if (found === false) {
            document.write(" not exist ");
        }
    }
}
findTriplets(arr);
console.log("\n**** Problem No-5 ****")
function isRepeated(number) {
    if (number % 11 == 0)
        return true;
    else
        return false;
}
let array = new Array();
for (let i = 1; i < 100; i++) {
    if (isRepeated(i))
        array.push(i);
}
console.log(array);
}
