function romanNumber(romanNumeral) {
    const romanNumeralMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let result = 0;
    let prevValue = 0;
  
    
    for (let i = romanNumeral.length - 1; i >= 0; i--) {
      const currentNumeral = romanNumeral[i];
      const currentValue = romanNumeralMap[currentNumeral];
  
      if (currentValue >= prevValue) {
        result += currentValue;
      } else {
        result -= currentValue;
      }
  
      prevValue = currentValue;
    }
  
    return result;
  }
  
  const romanNumeral1 = "IX";
 
  console.log("corresponding integar is" , romanNumber(romanNumeral1));

  