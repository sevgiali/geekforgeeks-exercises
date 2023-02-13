class Solution {
  rotate(arr, n) {
    let a = [arr[arr.length - 1]];
    for (let i = 0; i < arr.length - 1; i++) {
      a.push(arr[i]);
    }
    return a;
  }
}
