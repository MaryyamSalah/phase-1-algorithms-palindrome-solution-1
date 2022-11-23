function reversePalindrome(word) {
  // Write your algorithm here
  return word.split("").reverse().join("")
}

function isPalindrome(word){

const reverseString = reversePalindrome(word)

  return (word === reverseString)
}


/* 
   // create an array from the input string
     // reverse the array
     // create a string from the reversed array
      // return the reversed string
*/

/*
// reverse the input string
  // if the reversed string is the same as the input
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
  
  console.log(""); 

  

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
