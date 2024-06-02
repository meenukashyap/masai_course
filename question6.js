
// numbers.unshift=1;
// numbers.unshift=2;
// numbers.unshift=3;
// console.log(numbers);
// numbers.splice(5)=1;
// console.log(numbers);
// numbers.splice(6)=2;
// console.log(numbers);
// numbers.splice(7)=3;
// console.log(numbers);

console.log(rearrangeArray(numbers));

function rearrangeArray(numbers)
{
    numbers.unshift=1;
    numbers.unshift=2;
    numbers.unshift=3;
    console.log(numbers);
    numbers.splice(5)=1;
    console.log(numbers);
    numbers.splice(6)=2;
    console.log(numbers);
    numbers.splice(7)=3;
    console.log(numbers);
    return numbers;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(rearrangeArray(numbers));