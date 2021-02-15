var count = 0;


/**
 * 
 * @param {number} card 
 */
function cc(card) {
  // Only change code below this line
    if(card>=2&&card<=6)
        ++count;
    else
    if(card>=7&&card<=9)
        count;
    else
        --count;
    return `${count} ${count<=0?'Hold':'Bet'}`
  // Only change code above this line
}

cc(2); cc(3); cc(4); cc(5); cc(6);
console.log();