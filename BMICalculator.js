//Compare Mark's and John's BMIs

// Input: 1 object with properties for full name, mass, height
// methods to each objects to calculate the BMI
// Save the BMI to the object and also return it from the method

// Output 1 string: who has the highest BMI

// BMI = mass / height^2 (mass in kg and height in meter)

var mark = {
    fullName: 'Mark',
    mass: 60,
    height: 1.80,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
console.log(mark);

var john = {
    fullName: 'John',
    mass: 60,
    height: 1.80,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

if (mark.calcBMI() > john.calcBMI()){
    console.log("Mark's BMI is greater then John's" );
}else if (mark.bmi < john.bmi){
    console.log("John's BMI is greater then Mark's" );
} else{
    console.log("John's BMI and Mark's BMI are the same" );
}

console.log(mark, john);
