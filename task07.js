function romanToInt(romanNumeral) {
    const romanMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    };
  
    let result = 0;
    let prevValue = 0;
  
    for (let i = romanNumeral.length - 1; i >= 0; i--) {
      const currentNumeral = romanNumeral[i];
      const currentValue = romanMap[currentNumeral];
  
      if (currentValue < prevValue) {
        result -= currentValue;
      } else {
        result += currentValue;
      }
  
      prevValue = currentValue;
    }
  
    return result;
  }
  
  // Test the function
  const romanNumeral1 = "IX";
  const romanNumeral2 = "XXI";
  
  console.log(romanToInt(romanNumeral1)); // Output: 9
  console.log(romanToInt(romanNumeral2)); // Output: 21
  