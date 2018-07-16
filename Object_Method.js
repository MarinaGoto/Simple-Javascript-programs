//Objects and methods

var marina = {
    firstName: 'Marina',
    secondName: 'Gotovkina',
    birthYear: 1990,
    calcAge: function(){
        this.age = 2018 - this.birthYear;
    }
};
marina.calcAge();
console.log(marina);
