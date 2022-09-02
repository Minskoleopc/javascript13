

let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonA = document.querySelector('#one')


let liList = document.querySelectorAll('li')
for(let i= 0 ; i < liList.length ; i++){
   createButton(liList[i])
}

buttonA.addEventListener('click',function(){
    let text = inputText.value
    let newElement  = document.createElement('li') // <li></li>
    newElement.textContent = text  // <li>Grapes</li>
    createButton(newElement)
    ulList.appendChild(newElement)
    inputText.value = ""
})


function createButton(li){


    let remove = document.createElement('button') // <button></button>
    remove.textContent = "remove" // <button>remove</button>
    remove.className = "remove" // <button class ="remove">remove</button>
    li.appendChild(remove)

    let down = document.createElement('button') // <button></button>
    down.textContent = "down" // <button>down</button>
    down.className = "down" // <button class = "down">down</button>
    li.appendChild(down)

    let up = document.createElement('button')
    up.textContent = "up"
    up.className = "up"
    li.appendChild(up)


}