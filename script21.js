
// // Javascript object 
// // object -- property and method
// // method action and return type

// // let names = "chinmay"
// // console.log(names)
// // console.log(typeof names)

// // let firstName = new String("chinmay")
// // console.log(firstName)
// // console.log(typeof firstName)
// // firstName.toLowerCase()
// // firstName.indexOf()

// // let names = ["amol","ajay","minal"]
// // names.pop()
// // names.push("ram")

// // let names = new Array(3)
// // names.push("ram")
// // console.log(names)


// // inbuilt properties and methods


// let names = ["chinmay","sarika","poorva","abhisha","poorva"]
// console.log(names)

// // program
// let setA = new Set()
// // Set does not stores the value by index
// console.log(setA)
// setA.add('harikesh')
// setA.add('harikesh')
// console.log(setA)

// let setB= new Set('chinmay') // ['c','h','i','n','m','a','y']
// console.log(setB)
// let h = "fhsdhgjfhsghfhghfdghjahgjashgjhdjghalgrhdafhgdfalgadfhwqeqwetretre"
// let setC= new Set(h)
// console.log(setC.size)

// // add() ,has() , clear(),delete(), forEach(), size
// // how to loop

// let setE = new Set(["hari","ram","rahul","ramesh","ram","rahul"])
// console.log(setE)
// let q1 = setE.has("Ram")
// console.log(q1)


// let r2 = setE.delete('ram')
// console.log(r2)
// console.log(setE)

// setE.clear()
// console.log(setE)


// /*-------------------------------------------------*/

// let g1 = "amol"
// for(let i = 0 ; i < g1.length ; i++){
//     //console.log(i)
//     console.log(g1[i])
// }

// let cities = ["nagpur","pune","mumbai"]
// for(let i = 0 ; i < cities.length ; i++){
//     //console.log(i)
//     console.log(cities[i])
// }

// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:23
// }

// for(let key in info){
//     console.log(key,info[key])
// }

// let setH = new Set(["ram","hari","ram","ramesh","chinmay"])
// console.log(setH)

// // for(let vl of setH){
// //     console.log(vl)
// // }

// // setH.forEach(function(val){
// //     console.log(val)
// // })


// // Map  Vs Object 
// // in object literal key are always string 
// let info1 = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }
// // unlike in map key can be any data type
// // map stores in the form of key value

// // map -- set() ,get(), has() , size

// let mapA = new Map()
// console.log(mapA)

// mapA.set('firstName',"chinmay")
// mapA.set(true,"married")
// mapA.set("age",12)
// mapA.set(1,"mars")
// console.log(mapA)

// // retrive 
// console.log(mapA.get(1))
// console.log(mapA.size)

// let q11 = mapA.has("h")
// console.log(q11)

// mapA.delete('age')
// console.log(mapA)

// mapA.clear()
// console.log(mapA)



