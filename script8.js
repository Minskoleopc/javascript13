//              0         1      2      3
let names = ["chinmay","amol","hari","chetan"]

// add 
names.push('mayuri')
names.unshift('ankur')
console.log(names)
// update 

names[3] = "harikesh"
console.log(names)

// delete 

names.pop()
names.shift()
console.log(names)

// retrive
console.log(names[0])
console.log(names[names.length-1])


let info = ["chinmay","deshpande",33,44]
// object does not stores the value by index
let info2 = {
    // property:"value"
    // key:"value"
    firstName:"chinmay",
    lastName:"deshpande",
    age:33,
    rollNo:44
}
// retrive  (dot notation and bracket notation)

console.log(info2.firstName)
console.log(info2['firstName'])

// update (dot notation and bracket notation)

info2.firstName = "amol"
info2['lastName'] = "rao"
console.log(info2)

// add(dot notation and bracket notation)
info2.city = "nagpur"
info2['language'] = "marathi"
console.log(info2)

// delete (dot notation and bracket notation)

delete info2.city
delete info2['language']
console.log(info2)

/*------------------------------------*/

let vehicle = {
    brand:"audi",
    color:"red",
    type:"SUV",
}

let a = vehicle.color

// retrive 
console.log(vehicle.color)
// update 
vehicle.color = "blue"
console.log(vehicle)
// add
vehicle.regNo = "123"
console.log(vehicle)
// delete 
delete vehicle.type
console.log(vehicle)


// bracket notation

let vehicle2 = {
    brand:"audi",
    color:"red",
    type:"SUV",
}

// retrive 
console.log(vehicle['brand'])
// udpdate
vehicle2['color'] = "blue"
console.log(vehicle2)
// add 
vehicle2['regNo'] = 112
console.log(vehicle2)

// delete
delete vehicle2['type']


// Friday - 9pm , Sat -- 10 am , Sun - 10am 
// parallel - 9 am monday (new Batch)
// monday ---  9 to 9:45 pm






