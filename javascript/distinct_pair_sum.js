function distinctPairSum(arr, k) {
  const seen = {};
  for (let i = 0; i < arr.length - 1; i++) {
    const element = arr[i];
    const pair = k - element;
    if (element in seen || pair in seen) {
      continue;
    } else if (arr[i + 1] === pair) {
      seen[element] = [element, pair];
    }
  }
  return Object.values(seen);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));

  console.log("expecting [[2, 7], [6, 3], [-1, 10], [4.5, 4.5]]");
  console.log(
    distinctPairSum([3, 6, 5, 8, 4.5, 4.5, 6, 2, 7, 6, 2, -1, 10], 9)
  );
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution
/*
seen = {}
loop through the array
  const element = arr[i]
  const pair = k - element
  if element or pair in seen
   continue
  else if next element equals pair
    seen[element] = [element, pair];
return seen's values
*/
