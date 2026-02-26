
let numbers = [10, 20, 30, 10, 40, 20, 50, 60, 60];

const uniqueNumbers = [...new Set(numbers)];
console.log("Unique Numbers:", uniqueNumbers);

const secondLargest = [...uniqueNumbers].sort((a, b) => b - a)[1];
console.log("Second Largest:", secondLargest);

const frequencyMap = numbers.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});
console.log("Frequency Map:", frequencyMap);

const firstNonRepeating = numbers.find(num => frequencyMap[num] === 1);
console.log("First Non-Repeating:", firstNonRepeating);

const k = 2;
const rotatedArray = [...numbers.slice(-k), ...numbers.slice(0, -k)];
console.log("Rotated Array (by 2):", rotatedArray);

const nested = [1, 2, [3, 4, [5]]];
const flattened = nested.flat(Infinity);
console.log("Flattened Array:", flattened);

const missingNumArray = [1, 2, 3, 5, 6];
const n = 6; 
const expectedSum = (n * (n + 1)) / 2;
const actualSum = missingNumArray.reduce((sum, val) => sum + val, 0);
const missingNumber = expectedSum - actualSum;

console.log("Missing Number:", missingNumber);