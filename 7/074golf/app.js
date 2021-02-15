var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
var func = [
    (par,str)=>str==1,
    (par,str)=>str<=(par-2),
    (par,str)=>str==(par-1),
    (par,str)=>str==(par),
    (par,str)=>str==(par+1),
    (par,str)=>str==(par+2),
    (par,str)=>str>=(par+3)
];
/**
 * 
 * @param {number} par 
 * @param {number} strokes 
 */
function golfScore(par, strokes) {
  // Only change code below this line
    for (let index = 0; index < names.length; index++) {
        if(func[index](par,strokes))
            return names[index];
    }
  // Only change code above this line
}

let eggle = golfScore(5, 1);
console.log(eggle);