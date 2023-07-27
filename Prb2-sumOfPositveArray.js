function sumPositiveNumbers(arr) {
    return arr.reduce((sum, num) => {
      if (num > 0) {
        return sum + num;
      } else {
        return sum;
      }
    }, 0);
  }
  
  
  const numbers = [2, -5, 10, -3, 7];
  const result = sumPositiveNumbers(numbers);
  console.log(result); 