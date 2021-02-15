// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

/**
 * 
 * @param {string} name 
 * @param {string} prop 
 */
function lookUpProfile(name, prop){
// Only change code below this line
    const contact = contacts.find(v=>v.firstName==name);
    if(contact==undefined)
        return "No such contact";
    const p = contact[prop];
    if(p==undefined)
        return "No such property";
    return p;
// Only change code above this line
}

lookUpProfile("Bob", "likes");