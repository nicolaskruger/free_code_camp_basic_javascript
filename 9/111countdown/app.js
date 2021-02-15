// Only change code below this line
/**
 * 
 * @param {number} n 
 * 
 * @returns {number[]}
 */
function countdown(n){
    if(n<1)
        return []
    const arr = [n,...countdown(n-1)]
    return arr;
}
  // Only change code above this line