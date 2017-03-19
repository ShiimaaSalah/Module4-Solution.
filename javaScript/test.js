/*global console*/
var myNames = [
    'Jamel',
    'ahmed',
    'ali',
    'jamela',
    'Asmaa',
    'Shimaa',
    'Jody',
    'jehad',
    'mohamed',
    'Jomana'
];

console.log(myNames);

var i;

for (i = 0; i < myNames.length; i = i + 1) {
        
    var myName = myNames[i],
        
        result = myName.match(/(\bj\S+\b)/ig);
    
    if (result) {
        
        console.log("Goodbye" + " " + myName);
    
    } else {
        
        console.log("Hello" + " " + myName);
    }
}