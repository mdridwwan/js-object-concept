const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};

/*       
for(let i = 0; i < 10; i++){} regular loooooop;
for(const num of numbers){} // array,
for(const proop in student){} // object, 
 */
for (const prop in bottle) {
    //    console.log(prop, bottle[prop])
}
const keys = Object.keys(bottle);
for (const prop of keys) {
    //   console.log(prop, bottle[prop])
}

for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}

// const arr = ['color', 'yellow'];
// arr ['color']