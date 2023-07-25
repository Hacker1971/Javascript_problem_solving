function findSecondSmallest(arr) {
    if (arr.length < 2) {
      return "Error: The array must contain at least two elements.";
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
  
    if (secondSmallest === Infinity) {
      return "Error: There is no second smallest element in the array.";
    }
  
    return secondSmallest;
  }
  
  // Test the function
  const inputArr = [5, 1, 7, 2, 3, 4];
  const secondSmallest = findSecondSmallest(inputArr);
  console.log(secondSmallest); // Output: 2
  