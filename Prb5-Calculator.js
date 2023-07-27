function calculator(num1, operator, num2) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        if (num2 === 0) {
          return "error";
        }
        return num1 / num2;
      default:
        return "Error: Invalid operator.";
    }
  }
  
  // Example usage:
  const num1 = 5;
  const operator = "*";
  const num2 = 0;
  const result = calculator(num1, operator, num2);
  console.log("Result:", result);
  