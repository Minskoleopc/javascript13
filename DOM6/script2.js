

let liList = document.querySelectorAll('li')
let ulList = document.querySelector('ul')


ulList.addEventListener('mouseover',function(){
    for(let i = 0 ; i < liList.length ; i++){
        liList[i].textContent = liList[i].textContent.toUpperCase()
    }
})

ulList.addEventListener('mouseout',function(){
    for(let i = 0 ; i < liList.length ; i++){
        liList[i].textContent = liList[i].textContent.toLowerCase()
    }
})

// ------------------------------------------------------------------------- 
// event bubbling
