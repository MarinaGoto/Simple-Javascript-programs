// Loops and iteration
/*
// For loop
var marina = ['Marina', 'Gotovkina', 1994, 'programmer', false];
for (var i = 0; i < marina.length; i++){
    console.log(marina[i]);
}

// While loop
var i = 0;
while(i< marina.length){
    console.log(marina[i]);
    i++;
}


//continue and break statements
var marina = ['Marina', 'Gotovkina', 1994, 'programmer', false, 'blue'];
for (var i = 0; i < marina.length; i++){
    if (typeof marina[i] !== 'string') continue;
    console.log(marina[i]);
}

for (var i = 0; i < marina.length; i++){
    if (typeof marina[i] !== 'string') break;
    console.log(marina[i]);
}
*/

// Looping backwards
var marina = ['Marina', 'Gotovkina', 1994, 'programmer', false, 'blue'];
for (var i = marina.length - 1; i >= 0; i--){
    if (typeof marina[i] !== 'string') continue;
    console.log(marina[i]);
}
