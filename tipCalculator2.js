// Implement a tip calculator using objects and loops

// Input: 1. Object with an array of 5 integers (bill values) :  124, 48, 268, 180, 42
//        2. Method to calculate the tip
//           if bill < 50 the tip is 20%
//           else if 50 <= bill <= 200 tip is 15%
//           else 10%
//        3. The method should include a loop to iterate over all the paid bills and
//           do the tip calculations


// Output:      1. a new array containing all tips
//              2.an array containing final paid amount (bill + tip).
//HINT: Start with two empty arrays [] as properties and then fill them up in the loop

// EXTRA AFTER FINISH: Mark's family also went on a holiday.
// And they are going to four different restaurants.
// And the bill that they paid were
// 77, 375, 110, and 45 dollars.
// And Mark has a slightly different
// rules when it comes to tipping.
// So he likes to tip 20 percent,
// if the bill is less than 100 dollars,
// 10 percent, when the bill is between 100 and 300 dollars,
// and 25 percent if the bill is more than 300 dollars (different than John).
// Input:  5. Implement the same functionality as before, this time using Mark's tipping rules
//         6. Create a function (not a method) to calculate the average of a given array of tips.
// HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0).
// After you have the sum of the array, divide it by number of elements in it
// (that's how you calculate the average)
//         7. Calculate the avarege tip for each family
//         8. Log to the console which family paid the highest tips on average


var firstCase = {
    billValues: [124, 48, 268, 180, 42],
    allTips: [],
    amount: [],
    tip: [],
    calcTip: function(){
        for (var i = 0; i < this.billValues.length; i++) {
            var bill = this.billValues[i];
            var percentage;

            if (bill < 50){
                percentage = .2;

            } else if (bill >= 50 && bill <= 200){
                percentage = .15;

            }else{
                percentage = .1;
            }
            this.allTips[i] =  bill * percentage;
            this.amount[i] = bill + bill * percentage;

        }

        return this.tip;

    }
}
firstCase.calcTip();
console.log(firstCase);






