// Objects and properties
// Object literal syntax
var marina = {
    firstName: 'Marina',
    secondName: 'Gotov',
    birthYear: 1994,
    family: ['Magnus', 'mama', 'papa'],
    job: 'front end developer',
    isMarried: false
};
console.log(marina.firstName);
console.log(marina['secondName']);
var x = 'birthYear';
console.log(marina[x]);

marina.job = 'designer';
marina.isMarried = true;
marina['family'] = 'Mari';

console.log(marina);
//initializing new Object. new Object syntax
var magnus = new Object;
magnus.firstName = 'Magnus';
magnus.birthYear = 1991;
magnus['lastName'] = 'Lysfjord';
console.log(magnus);
