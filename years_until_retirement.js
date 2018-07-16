// Years until retirement

// Input: 1 integer and 1 string
// Output: 1 integer = Years until retirement

function calculate_Age(birthYear){
    return  2018 - birthYear;
}

var MagnusAge = calculate_Age(1991);
console.log(MagnusAge);

function years_until_retirement(year, name){
    var age = calculate_Age(year);
    var retirement = 65 - age;
    if (retirement > 0){
        console.log(name + ' retires in ' + retirement + ' years.')
    } else {
        console.log(name + ' is already retired.')
    }

}

years_until_retirement(1991, 'Magnus');
years_until_retirement(1930, 'Marina');
years_until_retirement(2000, 'Martin');
