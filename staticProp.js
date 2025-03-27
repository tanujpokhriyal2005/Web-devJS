class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createTd(){
        return `123`     //secrete can't access normally!
    }
}

const tanuj = new user("tanuj")
//console.log(tanuj.createId())    it will though error

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email= email
    }
}

const iphone = new Teacher("iphone","i@phone.com")
//console.log(iphone.createId()) it will again though error even if we have inherited from parent class   
iphone.logMe()