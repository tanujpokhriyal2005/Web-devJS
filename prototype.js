let myHeroes = ["thor","spidernan"]

let heroPower= {
    thor : "Hammer",
    spiderman : "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.tanuj = function(){
    console.log(`tanuj is present in all objects`)
}

heroPower.tanuj()
myHeroes.tanuj()

Array.prototype.heyTanuj = function(){
    console.log(`Tanuj says hello`)
}

myHeroes.heyTanuj()
//heroPower.heyTanuj()   // it will through error!

//inheritance : accessing data of other prototype

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher ={
    makeVideo: true
}

const TeachingSupport ={
    isAvailable: false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport  //access from inside or outside both are possible

}
Teacher.__proto__ = User    //now teacher can access user's data

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)  //TeachingSupport can access teacher properties

String.prototype.trueLength= function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
    
}

let anotherUsername = "ChaiAurCode     "
anotherUsername.trueLength()
"TanujPokhriyal".trueLength()
"iceTea     ".trueLength()



// how prototype's hierarchy works:   function,array,string << Object << NULL



