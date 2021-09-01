const first = { a: 1 };
const second = { a: 1 };
const third = first;
if (first === third) {
    //   console.log('object are equal')
} else {
    //console.log('object is deffernce')
}

/* const first2 = { a: 1, b: 11 };
const second2 = { a: 1, b: 11 };
if (JSON.stringify(first2) === JSON.stringify(second2)) {
    console.log('object are equal')
    //object are equal
} */

const first2 = { a: 1, b: 11 };
const second2 = { b: 11, a: 1 };
if (JSON.stringify(first2) === JSON.stringify(second2)) {
    console.log('object are equal')
        //object are not equal, karon hocche string wias carogter check kory , 
}

function compareObject(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj2) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}

const result = compareObject(first2, second2);
console.log(result);