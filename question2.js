//You are given an array of numbers. 
//Your task is to write a function named calculateSum that
// calculates the sum of all the numbers in the array 
//using the forEach method.

//Write a function calculateSum that performs the following tasks:

//Accepts an array of numbers as input.
//Iterates over each element in the array using the forEach method.
//Adds each element to a running total to calculate the sum.
//Returns the total sum.
const numbers = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers)); // Output: 15
 
function calculatesum(numbers)
{
    var sum=0;
    for(var i=0;i<numbers.length;i++)
        {
            sum=sum+numbers[i];
        }
        console.log(sum)
        for(var arr in numbers)
            {
                console.log(arr);
            }
            return sum;
}
