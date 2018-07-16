//tipCalculator

// Input: an array of 3 numbers
// if bill < 50 the tip is 20%
// elif 50 <= bill <= 200 tip is 15%
// else 10%

// Output: 2 arrays:
// all three tips (one for each bill)
// all three paid amounts (bill + tip)


function tipCalculator(bill){
    var percentage;
    if (bill < 50){
        percentage = .2;
    }  else if (bill >= 50 && bill < 200){
        percentage = .15;
    } else {
        percentage = .1;
    }
    return bill * percentage;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var paidAmount = [bills[0] + tips[0],
    bills[1] + tips[1],
     bills[2] + tips[2]];
console.log(tips);
console.log(paidAmount);


// 2 value
var bills2 = [12, 8, 88];
var tips2 = [tipCalculator(bills[0]),
    tipCalculator(bills2[1]),
    tipCalculator(bills2[2])];

var paidAmount2 = [bills2[0] + tips2[0],
    bills2[1] + tips2[1],
    bills2[2] + tips2[2]];

console.log(tips2, paidAmount2);


