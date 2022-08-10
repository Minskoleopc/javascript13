let city = ["pune","jaipur","nagpur","mumbai"]

let aa = city.forEach(function(el,index,arr){
    console.log(`welcome `+ el)
})
console.log(aa)

let numbers = [22,33,44,55,66,77,88]
let aaa = numbers.filter(function(el,index,arr){
    return el > 40
})
console.log(aaa)

let bbb = numbers.find(function(el,index,arr){
    return el > 40
})
console.log(bbb)

let ccc = numbers.findIndex(function(el,index,arr){
    return el > 40
})
console.log(ccc)

let rrr = [22,33,44,55,22,33,44,55,66]

let rrrr = rrr.every(function(el,index,arr){
    return el > 25
})
console.log(rrrr)

let rrrra = rrr.some(function(el,index,arr){
    return el > 2500
})
console.log(rrrra)

//--------------------------------------------


let numbersA = [11,22,33,44,55]

let rrra = numbersA.map(function(el){
    return el + 2
})
console.log(rrra)

let a1 = numbersA.filter(function(el){
    return el > 20
})
console.log(a1)

let aaa2 = numbersA.reduce(function(acc,el){
    return acc + el
},0)
console.log(aaa2)


let na = ["pune","mumbai","nagpur"]
na.forEach(function(el){
    console.log("welcome "+el)
})


// find() , findIndex(), every() ,some()


let hh = [33,11,223,44,55,22,111,33,44,55]

let r2 = hh.find(function(el){
    return el > 40
})
console.log(r2)

let r23 = hh.findIndex(function(el){
    return el > 44
})
let aaat = hh.every(function(el,index,arr){
    return el > 10
})
console.log(aaat)

let aaata = hh.some(function(el,index,arr){
    return el > 100
})
console.log(aaata)

// push(), pop(),shift(),unshift(),indexOf(),includes()

//          0         1     2          3         4
let qw = ["nagpur","pune","mumbai","banglore","kolkata"]
//           -5       -4     -3       -2          -1
console.log(qw.slice(2))
console.log(qw.slice(1,5))
console.log(qw.slice(1,5))
console.log(qw.slice(-3))
console.log(qw.slice(-5,-2))
console.log(qw.slice(0,-1))
console.log(qw.slice(-1,-4))
// -----------------------------------

let fruits = ["apple","mango","banana","grapes"]
let uuu = fruits.reverse()
console.log(uuu)

let qqq = fruits.sort()
console.log(qqq)


// fill()

// splice()

// concat()

// join()

// flat()


// splice()
//             0       1         2           3
let cities = ["pune","mumbai","banglore","kolkalta"]
// cities.pop()
// console.log(cities)
// cities.shift()
// console.log(cities)
//cities.splice(index,numberOfElements)
// let rrraa = cities.splice(1,2)
// console.log(cities)
// console.log(rrraa)

let rrraaa = cities.splice(1,2,"nagpur","wardha")
console.log(cities)


// concat

let num = [11,22,33]
let numB = [33,44,55]

let numbC = num.concat(numB)
console.log(numbC)

let numD = numB.concat(num)
console.log(numD)

// join()

let info = ["amol","rao",7709192441]

let a11 = info.join(' ') // "amol rao 7709192441"
let a22 = info.join('-') //amol-rao-7709192441
let a33 = info.join('@') //amol@rao@7709192441

console.log(a11)
console.log(a22)
console.log(a33)



let cities2 = ["pune","mumbai","banglore","kolkalta"]

// cities2.shift()
// cities2.pop()
//cities2.splice(indexValue,numberofElement)

// cities2.splice(1,2)
// console.log(cities2)

// cities2.splice(1,2,"nagpur","wardha")
// console.log(cities2)


// flat()

//            0          1          2
//          0  1   2   0  1  2   0  1  2
let arr = [[11,22,33],[22,33,44],[66,77,88]]
console.log(arr[0][2])
console.log(arr[1][1])

let kll = arr.flat()
console.log(kll)

// fill()

//           0   1  2  3  4  5 6  7
// let marks = [99,98,23,22,33,12,10,33]
// let ttt = marks.fill(true,2)
// console.log(ttt)
//           0   1  2  3 4  5  6  7
let marks = [99,98,23,22,33,12,10,33]
let ttt = marks.fill(true,2,5)
console.log(ttt)
