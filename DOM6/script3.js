{/* <ul>
<li>Apple</li>
<li>Mango</li>
<li>Banana</li>
<li>Papaya</li>
</ul> */}

let ulList = document.querySelector('ul')
let buttonA = document.querySelector('button')
let inputText = document.querySelector('input')

buttonA.addEventListener('click',function(){
    let text = inputText.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = text // <li>Payapa</li>
    ulList.appendChild(newLi)
    inputText.value = ""
})



