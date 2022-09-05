
let ulList = document.querySelector('ul')
let inputBox = document.querySelector('input')
let buttonA = document.querySelector('#one')
let liList = document.querySelectorAll('li')
for(let i = 0 ; i < liList.length ; i++){
    createButton(liList[i])
}

ulList.addEventListener('click',function(event){
    // console.log(event.target)
    // console.log(event.target.tagName)
    // console.log(event.target.className)
    if(event.target.tagName === "BUTTON"){

        if(event.target.className == "remove"){
            // statements
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)

        }
        else if(event.target.className == "up"){
            // statements
            let li = event.target.parentElement
            let ul = li.parentElement
            let prevLi = li.previousElementSibling
            if(prevLi){
                ul.insertBefore(li,prevLi)
            }
          

        }
        else if(event.target.className == "down"){07-Pig-Game
            // statements
            let li = event.target.parentElement
            let ul = li.parentElement
            let nextLi = li.nextElementSibling
            if(nextLi){
                ul.insertBefore(nextLi,li) 
            }   
        }
    }



})




buttonA.addEventListener('click',function(){
    let text = inputBox.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = text // // <li>Papaya</li>
    createButton(newLi)
    ulList.appendChild(newLi)
    inputBox.value = ""
})

function createButton(li){
    let remove = document.createElement('button') // <button></button>
    remove.textContent = "remove" // <button>remove</button>
    remove.className = "remove" // <button class ="remove">remove</button>
    li.appendChild(remove) 

    let up = document.createElement('button') // <button></button>
    up.textContent = "up" // <button>up</button>
    up.className = "up" // <button class ="up">up</button>
    li.appendChild(up) 

    let down = document.createElement('button') // <button></button>
    down.textContent = "down" // <button>down</button>
    down.className = "down" // <button class ="down">down</button>
    li.appendChild(down) 

}