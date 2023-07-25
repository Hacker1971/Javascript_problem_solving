function findMostFrequentElement(arr) {
    const elementCounts = {};
    let maxCount = 0;
    let mostFrequentElement;
  
    arr.forEach(element => {
      elementCounts[element] = (elementCounts[element] || 0) + 1;
  
      if (elementCounts[element] > maxCount) {
        maxCount = elementCounts[element];
        mostFrequentElement = element;
      }
    });
  
    return mostFrequentElement;
  }
  
  // Test the function
  const inputArr = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const mostFrequent = findMostFrequentElement(inputArr);
  console.log(mostFrequent); // Output: 3
  