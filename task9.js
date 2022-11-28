// #1  a function that takes the input string and reverses it

function reverseThisString(string){
	var result = "";
        // loop over characters in input string starting from the end  
	for(var i=string.length-1; i>=0; i--){
            // add current element to the result
	    result  += string[i];
    }
    return result;
}
// #2  a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase


function swapCase(string) {
    var result = "";
    // loop over the characters in input string
    for(var i=0; i<string.length; i++){
        // if current character is uppercase then
        if(string[i] == string[i].toUpperCase()){
            // convert it to lower case
            result += string[i].toLowerCase();
        }
        // otherwise convert it to lower case
        else{
            result += string[i].toUpperCase();
        }
    }
    return result;
}
// #3 convert array of numbers from farenheit to celcius

function toCelcius(array){
    // map resultArr to anonymous function with temperature(Fahrenheit) as argument one at a time
    // the anonymous function returns the temperature in Celcius 
    const resultArr = array.map((temp)=>{return (temp - 32) * 5/9});
    return resultArr;
}
//#4 a function that takes an input array and returns an array of booleans (>=75) or fail (<75)

function passOrFail(array){
    // map resultArray to anonymous function that takes one element at a time as argument 
    // and return true if element is >= 75 and false otherwise
    const resultArray = array.map((element)=>{return element >= 75 ? true : false});
    return resultArray;
}
//#5 code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']


function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
   
    var resultArray = [];
    for(var i=0; i<cardinalNumbers.length; i++){
       
        resultArray[i] = cardinalNumbers[i] + " is " + germanNumbers[i];
    }
    return resultArray;
}

// #6 code that returns an array of ONLY prime numbers that are in the array numbers

function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
 
    const primeNumbers = numbers.filter((number)=>{
       
        if (number <= 1)
            return false;
      
      
        for (let i = 2; i < number; i++)
        
            if (number % i == 0)
                return false;
        return true;
    });
    return primeNumbers;
}

//Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT" Console log out:
function printMultiples() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("CSC225 RULES I LOVE JAVASCRIPT");
        } else if (i % 3 === 0) {
            console.log("CSC225 RULES");
        } else if (i % 5 === 0) {
            console.log("I LOVE JAVASCRIPT");
        } else {
            console.log(i);
        }
    }
}

printMultiples();