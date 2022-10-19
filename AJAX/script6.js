

// https://reqres.in/api/users/2 --- 2  
// https://reqres.in/api/users/1---- 4   ###########  2
// https://reqres.in/api/users/3 ----6
// https://reqres.in/api/users/4-----8
// asyn ----- sync???


// program1


function userInfo(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(res){
        return res.json()
    })
}

// program1

function renderHtml(obj) {
    document.write(`<h1>${obj.first_name}</h1>`)
    document.write(`<h1>${obj.last_name}</h1>`)
    document.write(`<h1>${obj.email}</h1>`)
    document.write(`<h1>${obj.id}</h1>`)
    document.write(`<img src = ${obj.avatar}>`)

}

async function UserInfo(id1,id2,id3,id4){
    let userData =  await Promise.all([
        userInfo(id1),
        userInfo(id2),
        userInfo(id3),
        userInfo(id4),
    ])

    console.log(userData)
    userData.forEach(function(el){
        renderHtml(el.data)
    })

}
//UserInfo(1,2,3,4)


// Program 2

async function Info(){
    let a = await Promise.all([
        Promise.resolve('hello'),
        Promise.reject('hello'),
        Promise.resolve('Bye')
    ])
    console.log(a)
}
Info()


async function Info(){
    let a = await Promise.race([
        // Promise.resolve('hello solved'),
        // Promise.reject('hello rejected')

        new Promise(function(resolve){
            setTimeout(function(){
                resolve('hello resoved')
            },3000)
        }),

        new Promise(function(reject){
            setTimeout(function(){
                reject('hello rejected')
            },2000)
        })


    ])
    console.log(a)
}
Info()


// Promise.allSettled()


// Promise.any()