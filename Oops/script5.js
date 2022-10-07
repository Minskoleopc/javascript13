
// class GrandFather {
//     firstName = "manohar"
//     lastName = "deshpande"
//     displayGName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Father extends GrandFather {
//     fFirstName = "shirish"
//     displayFName(){
//         console.log(this.fFirstName + this.firstName + this.lastName)
//     }
// }

// class Son extends Father {

//     sName = "chinmay"
//     displaySName(){
//         console.log(this.sName + this.fFirstName + this.lastName)
//     }
// }

// let chinmay = new Son()
// console.log(chinmay.firstName)
// console.log(chinmay.lastName)
// console.log(chinmay.fFirstName)
// console.log(chinmay.sName)

// chinmay.displayGName()
// chinmay.displayFName()
// chinmay.displaySName()


// let shirish = new Father()
// console.log(shirish.firstName)
// console.log(shirish.lastName)
// shirish.displayGName()
// console.log(shirish.fFirstName)
// shirish.diplayFName()


// Regular
// let manohar = new GrandFather()
// console.log(manohar.firstName)
// console.log(manohar.lastName)
// manohar.displayGName()

// Program 2

// class GFather {
//     constructor(firstName, lastName){
//         this.GfirstName = firstName
//         this.lastName = lastName
//     }
//     displayGName(){
//         console.log(this.GfirstName + this.lastName)
//     }
// }

// class Father extends GFather {

// }

// let shirish = new Father('manohar','deshpande')
// console.log(shirish.GfirstName)
// console.log(shirish.lastName)




class GFather {
    constructor(firstName, lastName){
        this.GfirstName = firstName
        this.lastName = lastName
    }
    displayGName(){
        console.log(this.GfirstName + this.lastName)
    }
}

class Father extends GFather {
    constructor(firstName, lastName,fFirstName){
        super(firstName, lastName)
        this.fName = fFirstName
    }
    displayFName(){
        console.log(this.fName +this.GfirstName +this.lastName)
    }

}
class Son extends Father {
    constructor(firstName, lastName,fFirstName,sName){
        super(firstName, lastName,fFirstName)
        this.sName = sName
    }
    displaySName(){
        console.log(this.sName +this.fName +this.lastName)
    }
}
let chinmay = new Son ("manohar","deshpande","shirish","chinmay")
chinmay.displayGName()
chinmay.displayFName()
chinmay.displaySName()

// let shirish = new Father('manohar','deshpande' , "shirish")
// console.log(shirish.GfirstName)
// console.log(shirish.lastName)
// console.log(shirish.fName)

// shirish.displayGName()
// shirish.displayFName()

// program  4
class FatherA {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    displayFName(){
        console.log(this.firstName + this.lastName)
    }

}

class SonA extends FatherA {
    constructor(firstName, lastName,sname){
        super(firstName, lastName)
        this.sname = sname

    }

    displaySname(){
        console.log(this.sname+this.firstName+ this.lastName)
    }

}

class DaughterA extends FatherA {
    constructor(firstName, lastName,dname){
        super(firstName, lastName)
        this.dname = dname

    }
    displayDname(){
        console.log(this.dname+this.firstName+ this.lastName)
    }
    
}
let chinmay2 = new SonA("shirish","deshpande","chinmay")
chinmay2.displayFName()
chinmay2.displaySname()

let gauri2 = new DaughterA("shirish","deshpande","gauri")
gauri2.displayFName()
gauri2.displayDname()