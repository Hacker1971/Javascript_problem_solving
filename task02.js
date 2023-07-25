function sumPositiveNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
      }
    }
    return sum;
  }
  
  // Test the function
  const inputArr = [2, -5, 10, -3, 7];
  const outputSum = sumPositiveNumbers(inputArr);
  console.log(outputSum); // Output: 19
  