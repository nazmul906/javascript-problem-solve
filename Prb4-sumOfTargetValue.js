
function findTwoNumbersWithSum(arr, target) {
  const numMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    numMap.set(arr[i], i);
  }

  return null; 
}

const numbers = [1, 3, 6, 8, 11, 15]
const target = 9;
const result = findTwoNumbersWithSum(numbers, target);
console.log("Indices of two numbers with the sum:", result);
