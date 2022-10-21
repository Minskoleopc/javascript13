 let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    rollNo:78
 }
 // retrive (dot notation and bracket notation)
 console.log(info.firstName)
 // update 
 info.firstName = "chinmay"
 // delete 
 delete info.firstName
 // add
 info.lastName = "dani"
 info.city = "pune"
 console.log(info)


 let students  = [
    {
        firstName:"chinmay",
        lastName:"deshpande",
        age:34,
        city:"pune",
        skills:["python","javascript","cpp","html",'CSS3'],
        marks:80
    },
    {
        firstName:"poorva", // purva
        lastName:"vyas",
        age:29,
        city:"ujjain",
        skills:["python","cpp"],
        marks:79
    },

    {
        firstName:"amol",
        lastName:"rao",
        age:32,
        city:"nagpur",
        skills:["sql","python","css"],
        marks:43
    },

    {
        firstName:"abhisha",
        lastName:"burande",
        age:25,
        city:"nagpur",
        skills:["sql","javascript","tableau","css","python"],
        marks:23
    }

]

// program1
// print firstName of every person
console.log(students[0].firstName)
students.forEach(function(el,index,arr){
    console.log(el.firstName)
})

// program2
// add sales  forces to every object
students.forEach(function(el){
    ///console.log(el.skills)
    el.skills.push('sales force')
})
console.log(students)

// program 3
// average age of all students 
// reduce()
let q22 = students.reduce(function(acc,el){
    return acc + el.age
},0)
console.log(q22/students.length)

//program 4
//username with city nagpur and skills python

students.forEach(function(el){
    if(el.city === "nagpur" && el.skills.includes('python')){
        console.log(el.firstName)
    }
})

// program 5 
// add 10 to every marks for student
students.forEach(function(el){
    el.marks = el.marks + 10
})
console.log(students)

//program 6
// print  name and number of skills 
// amol:3
students.forEach(function(el){
    console.log(el.firstName,el.skills.length)
})

// program 7 
// username starting with 'a'
students.forEach(function(el){
    if(el.firstName.startsWith('a')){
        console.log(el.firstName)
    }
})














