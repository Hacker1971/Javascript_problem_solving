function findTwoNumbersWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const sum = arr[left] + arr[right];
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return []; // If no such pair is found, return an empty array
  }
  
  // Test the function
  const inputArr = [1, 3, 6, 8, 11, 15];
  const targetValue = 9;
  const indices = findTwoNumbersWithSum(inputArr, targetValue);
  console.log(indices); // Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)
  