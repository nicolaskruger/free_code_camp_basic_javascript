/**
 * 
 * @param {number} num 
 */
function testSize(num) {
    // Only change code below this line
    if(true){}
    else if(true){}
    else if(true){}
    else if(true){}
    else{}
    let ret = ["Tiny", "Small","Medium","Large"][Math.trunc(num/5)];
    return ret!=undefined?ret:"Huge";
  
    // Only change code above this line
}
  [...Array(25).keys()].forEach(s=>{
      console.log(`${s}: ${testSize(s)}`)
  });