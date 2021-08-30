/* 
cases of getting undefined:
    1.varaible value not assigned
    2.function but didn't returned anything
    3.write return. but didn't specified what to return
    4.parameter which isn't passed exactly
    5.property that isn't in the object will be undefined
    6.array index which is out of range will be undefined
    7.accessing array deleted element 
    8.explicitly setting undefined will be undefined
*/
// case-1: of undefined: if var value is not given.(varaible value not assigned)
let first;
// console.log(first);
// case-2: if function is not returned
function second(x, y) {
    const sum = x + y;
}
const result = second(3, 91)
// console.log(result);
// case-3:return but not specified.
function add(a, b) {
    const sum = a + b;

    if (b < 10) {
        return;
    }

    const fun = a * b;
    return sum;
}
const fourth = add(2, 7)
// console.log(fourth)

// case-4:parameter that isn't passed
function double(a, b) {
    const result = a * 2;
    // console.log(b);
    return result;
}
double(81);

// case-5:property that isn't in the object will be undefined
const fifth = { name: 'sagri uddin', age: 15, location: 'Vurungamari' };
// console.log(fifth.email);

//case-6: accessing array element out of range
const sixth = [53, 12, 73, 62];
// console.log(sixth[21]);

//case-7:accessing array deleted element
// delete sixth[2];
console.log(sixth[2]);

//case-8:explicitly setting undefined will be undefined
const seventh = undefined;
// console.log(seventh);


/* 
                            null
*/

const myObj = { name: 'Samad', profession: null }