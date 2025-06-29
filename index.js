function hasTargetSum(array, target) {
  // Use a Set to track seen numbers and check complements efficiently
  const seen = new Set();
  for (let num of array) {
    const complement = target - num;
    if (seen.has(complement)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}


/* 
  Big O Time Complexity:
  - O(n), where n is the length of the input array, since we make a single pass through the array.
*/

/* 
  Pseudocode:
  1. Initialize an empty Set called 'seen'.
  2. For each number 'num' in the input array:
     a. Compute the 'complement' as target - num.
     b. If 'complement' exists in 'seen', return true (pair found).
     c. Otherwise, add 'num' to 'seen'.
  3. If loop completes with no pair found, return false.
*/

/*
  Explanation:
  We want to determine if any two numbers in the array sum to the given target. By leveraging a Set to store numbers we've already visited, we can, for each new number, check in constant time whether its complement (the target minus the current number) has been seen. If so, we've found a valid pair; if not, we record the current number and continue. This approach avoids the quadratic time of checking all pairs by trading space (the Set) for efficient lookups, resulting in an overall linear time solution.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
