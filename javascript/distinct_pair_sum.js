function distinctPairSum(arr, k) {
  const result = [];
  const seen = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const pair = k - element;
    if (element in seen || pair in seen) {
      continue;
    } else if (arr.includes(pair) && arr.indexOf(pair) !== i) {
      seen[element] = pair;
      result.push([element, pair]);
    }
  }
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));

  console.log("expecting [[2, 7], [6, 3], [-1, 10], [4.5, 4.5]]");
  console.log(distinctPairSum([3, 5, 8, 4.5, 6, 7, 6, 4.5, 2, -1, 10], 9));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution
/*
result = [[], []]
seen = {}
loop through the array
  const element = arr[i]
  const pair = k - element
  if element or pair in seen
   continue
  else if pair in array and its not the current element
    seen[element] = pair;
    result.push(element, pair])
return result
*/
