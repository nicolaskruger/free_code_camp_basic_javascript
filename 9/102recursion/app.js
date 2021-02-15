/**
 * 
 * @param {number[]} arr 
 * @param {number} n 
 */
function sum(arr, n) {
    // Only change code below this line
    if(n==0)
        return 0;
    return arr[n-1]+sum(arr,--n);
    // Only change code above this line
  }