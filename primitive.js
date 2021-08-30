/*
Data Types
Pirmitive D
1.number
2.string
3.boolean
4.null
5.undefined
6.object--(non-primitive data, can contain more than one data)
7.symbol --(added in es6)
*/

let a = 'hello world';
let b = a;
// console.log(a, b);
a = 'gello'
// console.log(a, b);

const x = { job: 'web-developer' }
const y = x;
console.log(x, y)
// x.job = 'full-stack developer'
y.job = 'full-stack developer'
console.log(x, y);