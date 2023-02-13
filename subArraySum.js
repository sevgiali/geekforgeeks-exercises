function subArraySUm(arr, n, s) {
  let currentSum = arr[0],
    start = 0;

  for (let i = 1; i <= n; i++) {
    while (currentSum > s && start < i - 1) {
      currentSum -= arr[start];
      start += 1;
    }
    if (currentSum === s) {
      return [start + 1, i];
    }

    currentSum += arr[i];
  }
  return [-1];
}

subArraySUm([1, 2, 3, 7, 5], 5, 12);
