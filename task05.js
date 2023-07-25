function calculate(num1, operator, num2) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return "Error: Cannot divide by zero!";
        }
        return num1 / num2;
      default:
        return "Error: Invalid operator!";
    }
  }
  
  // Test the calculator
  const num1 = 5;
  const num2 = 3;
  const operator = '+';
  const result = calculate(num1, operator, num2);
  console.log(result); // Output: 8 (5 + 3)
  