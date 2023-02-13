class Solution {
  //Function to return the count of number of elements in union of two arrays.
  doUnion(a, n, b, m) {
    let newArr = [...a, ...b];
    let newSet = new Set(newArr);
    return newSet.size;
  }
}
