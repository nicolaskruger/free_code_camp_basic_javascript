// Setup
/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
function abTest(a, b) {
    // Only change code below this line
  
    if([a,b].reduce((a,b)=>(a||b<0),false))
        return undefined;
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }

abTest(1,1);