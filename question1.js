


function extractSubArray(animals)
{
    var newarray=animals.splice(3,7);
    return newarray;
}
const animals = ["Dog", "Cat", "Elephant", "Giraffe", "Lion", "Tiger", "Zebra", "Kangaroo", "Panda", "Monkey"];
var arrayanimals=extractSubArray(animals);
console.log(arrayanimals);