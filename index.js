function isPalindrome(word) {
  // Convert to lowercase to handle any capitalization
  word = word.toLowerCase();
  
  // Compare characters from start and end moving towards center
  let left = 0;
  let right = word.length - 1;
  
  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
