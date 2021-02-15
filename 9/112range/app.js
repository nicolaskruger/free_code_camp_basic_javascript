/**
 * 
 * @param {number} startNum 
 * @param {number} endNum
 * 
 * @returns {number[]} 
 */
function rangeOfNumbers(startNum, endNum) {
    if(startNum==endNum)
        return [endNum];
    const arr = [startNum,...rangeOfNumbers(startNum+1,endNum)]
    return arr;
  };