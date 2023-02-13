class Solution {
  getMinMax(arr, n) {
    let min = arr[0];
    let max = arr[n - 1];

    for (let i = 0; i < n; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }

      if (arr[i] > max) {
        max = arr[i];
      }
    }

    return [min, max];
  }
}
