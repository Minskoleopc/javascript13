
//loops

// for loop and while loop

//             0   1  2  3  4  5  6 7 
let numbers = [11,22,33,44,55,66,77,88]
console.log(numbers[0]) // 11
console.log(numbers[1])


// for(intilization , conditionCheck , incrementDecrement){

   // console.log('hello')

//}

for(let i = 0 ; i < 5 ;i++){ // 1 //2 // 3 // 4 // 5
    console.log('hello')
   
}
for(let i = 0 ; i <= 5 ;i++){ //1 //2 // 3 // 4 // 5 // 6
    console.log(i) // 0 ,1 ,2 , 3 ,4 ,5
}

for(let i = 1 ; i <=10 ; i++){
    console.log(i)
}

for(let i = 2 ; i <= 20 ; i = i+2){ // 4 // 6 // 8 // 10 ------20 22
    console.log(i) // 2 , 4 , 6 , 8 , 10  , 12,14,16,18,20
}

for(let i = 3 ; i >= 0 ; i--){ // 2 //1 // 0 // -1
    console.log(i) // 3 , 2 ,1 ,0
}

for(let i = 10 ; i >= 1 ; i--){ 
    console.log(i) 
}


// break statement


for(let i = 0 ; i < 4 ; i++){  //1 //2

    if(i ==2 ){
        break
    }
    console.log(i)  // 0 ,1
}


for(let i = 0 ; i < 4 ; i++){  //1 //2
    console.log(i)   // 0 ,1 ,2
    if(i ==2 ){
        break
    }   
}

// for loop and  while loop

// for(intialization ; conditionCheck ; increment/decrement){

//     // statement


// }


// 1 to 3


for(let i = 1 ;i < 4 ; i++){ // 2 // 3 // 4
    console.log(i) //1 , 2 , 3
}

// 0 to 5 
for(let i = 0 ; i <=5 ; i++){
    console.log(i)
}


// table of 2

for(let i = 2 ; i <= 20 ; i = i+2){
    console.log(i)
}


// 10 to 1 

for(let i = 10 ; i >= 1 ; i--){
    console.log(i)
}


// break statement

for(let i = 0 ; i < 5 ; i++){
    if(i == 2){
        break
    }
    console.log(i)
}

// 0 ,1 


for(let i = 0 ; i < 5 ; i++){
    console.log(i)
    if(i == 2){
        break
    }
    
}

// continue



for(let i = 0 ; i < 5 ; i++){ //1 // 2 // 3 // 4 //5
    if(i == 3){
        continue
    }
    console.log(i) // 0 ,1 , 2 , 4
}

let x = 10
console.log(10 == 10) // boolean


// while loop 

// intialization 
//while(condition){

    // stamement 
    // statement 2

    // increment / decrement
//}


let i1 = 0
while(i1 < 5){
    console.log(i1) // 0 , 1 ,2 , 3 , 4
    i1++ // 1 // 2 // 3 // 4 // 5
}

let i2 = 1
while(i2 <= 10){
    console.log(i2)
    i2 ++
}

let i3 = 10
while(i3 >= 1){
    console.log(i3)
    i3--
}

// table of 2

let i4 = 2

while(i4 <= 20){
    console.log(i4)
    i4 = i4 + 2
}

// for loop ---- finite --- toss coin 5 types
// while loop ---- until the condition is meet toss the coin

// break statement with while loop


let i5 = 10

while(i5 >= 0){
    //) // 10 , 9 , 8 , 7 , 6 
    if(i5 == 5){
        break
    }
    console.log(i5)
    i5 -- // 9 , 8 , 7 , 6 ,5
}

// continue statement with while loop 


let i6 = 0
while(i6 < 5){

    if(i6 == 3){
        i6 ++ // 4
        continue
    }
    console.log(i6) // 0 , 1 , 2 , 4
    i6 ++ // 1 // 2 // 3 // 5
}













