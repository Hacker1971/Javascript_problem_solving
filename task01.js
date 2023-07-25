function reverseString(inputStr) {
    let reversedStr = "";
    for (let i = inputStr.length - 1; i >= 0; i--) {
      reversedStr += inputStr[i];
    }
    return reversedStr;
  }
  
  // Test the function
  const inputStr = "hello world";
  const outputStr = reverseString(inputStr);
  console.log(outputStr); // Output: "dlrow olleh"
  