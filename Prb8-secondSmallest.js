function findSecondSmallest(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
      return null; // Return null for invalid inputs
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
      } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
      }
    }
  
    return secondSmallest !== Infinity ? secondSmallest : null;
  }
  
  // Example usage:
  const numbers = [5, 3, 8, 1, 7, 3, 6];
  const secondSmallest = findSecondSmallest(numbers);
  console.log("The second smallest number is:", secondSmallest);
  