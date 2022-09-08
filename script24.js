let students  = [
    {
        fullName:"chinmay deshpande",
        transactions:[1100,3300,5500,-33,-44,-55,66,77,88],
        city:"pune",
        skills:["python","javascript","html","cypress"],
        age:34
    },

    {
        fullName:"poorva vyas",
        transactions:[1100,-3300,-5500,-33,44,55,660,-77,55],
        city:"ujjain",
        skills:["python","javascript","html","Django"],
        age:33
        // username:"pv"
    },

    {
        fullName:"amol rao",
        transactions:[1100,-3300,-5500,-33,44,55,660,-77,55],
        city:"wardha",
        skills:["python3","jquery","sql","msbi"],
        age:32
    },

    {
        fullName:"amit bhure",
        transactions:[1100,-3300,-5500,-33,44,55,660,-77,55],
        city:"pune",
        skills:["python3","seo","sql","msbi"],
        age:45
    }
]
// first user with python skills

let a = students.find(function(el){
    return el.skills.includes('python')
})
console.log(a)
// add username to everyobject
students.forEach(function(el){
   let a = el.fullName.split(" ")
   let a1 = a.map(function(word){
        return word[0]
   })
   //console.log(a1.join(""))
   el.username = a1.join("")
})
console.log(students)

// student with pune student
let qq1 = students.filter(function(el){
    return el.city == "pune"
})
console.log(qq1)
qq1.forEach(function(el){
    console.log(el.fullName)
})

// forEach
students.forEach(function(el){
    if(el.city == "pune"){
        console.log(el.fullName)
    }
})
// average age of all students
let qq3 = students.reduce(function(acc,el){
    return acc + el.age
},0)
console.log(qq3/students.length)

// adding playwright skill to all objects 
students.forEach(function(el){
    el.skills.push("playwirght")
})
console.log(students)

















// let rr = "chinmay shirish deshpande".split(' ')
// //["chinmay","shirish","deshpande"]
// let rr2 = "chinmay shirish deshpande".split('a')
// //["chinm","y shirish deshp","nde"]
// console.log(rr)
// console.log(rr2)











//"chinmay deshpande" ====> "cd"
//"amol rao" =============> "ar"