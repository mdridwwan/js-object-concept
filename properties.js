//               KEY    VALUE
const bottle = { color: 'yellow', hold: 'water', price: 50, isCleaned: true };
// getting all properties names
const keys = Object.keys(bottle);
// getting all properties values
const values = Object.values(bottle);
// getting all properties name and values check,
const entries = Object.entries(bottle);
// getting not preperties deleteeeed is seal. seal properti delet kora jai nh abr properti change kora jai but kono properti add kora jai nh.
Object.seal(bottle);
bottle.price = 100;
// console.log(bottle);
//{ color: 'yellow', hold: 'water', price: 100, isCleaned: true }
// freeze mane kono properti kicuy kora jai bo nh.
Object.freeze(bottle)
bottle.price = 100;


// getting any preperties deleted
delete bottle.isCleaned;


console.log(bottle);