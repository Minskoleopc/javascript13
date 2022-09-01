

let liList = document.querySelectorAll('li')// [li,li,li,li]
let buttonA = document.querySelector('button')

// for(let i = 0 ; i < liList.length ; i++){
//     // console.log(i)
//     //console.log(liList[i].textContent)
//     if(i%2 == 0){
//         liList[i].style.color = "green"
//     }
//     else {
//         liList[i].style.color = "red"
//     }
// }


buttonA.addEventListener('click', function () {
    for (let i = 0; i < liList.length; i++) {
        // console.log(i)
        //console.log(liList[i].textContent)
        if (i % 2 == 0) {
            liList[i].style.color = "green"
        }
        else {
            liList[i].style.color = "red"
        }
    }

})