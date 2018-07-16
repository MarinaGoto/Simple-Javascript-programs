// Function declaration
// function whatDoYouDo(job, name) {}

// Function expression
var whatDoYouDo = function(job, name) {
    switch(job){
        case 'teacher':
            return name + ' teaches kids how to code';
        case 'programmer':
            return name + ' creates awesome user interferes';
        case 'doctor':
            return name + ' operates people';
        default:
            return name + ' does something else'
    }
}

console.log(whatDoYouDo('programmer', 'Magnus'));
console.log(whatDoYouDo('teacher', 'Kate'));
console.log(whatDoYouDo('driver', 'John'));