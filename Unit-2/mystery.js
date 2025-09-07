// Problem:
// Give this code to students and ask them to predict output by dry-running.

function mystery(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result += arr[i];
    } else {
      result -= arr[i];
    }
  }
  console.log(result);
}

mystery([3, 4, 5, 6]); // what will be the output?
