
let numbers = [1,2,3];

//front ADD 0 1 2 3
numbers.unshift(0);

//rear ADD 0 1 2 3 4
numbers.push(4);

console.log(numbers);

//front Delete
numbers.shift();
console.log(numbers);

//rear Delete
numbers.pop();
console.log(numbers);

//choice Delete
numbers.splice(0,1);
console.log(numbers);

//choice Delete and ADD
numbers.splice(0,1,0,1,2);
console.log(numbers);

//find of number
console.log(numbers.includes(5));
console.log(numbers.includes(3));

//choice find
console.log(numbers.indexOf(1,0));
console.log(numbers.lastIndexOf(1,0));

//배열에서 '라' 제거
const arr = ['가','라','다','라','마','라'];

while(arr.indexOf('라') > -1) {
    arr.splice(arr.indexOf('라'),1);
}
console.log(arr);