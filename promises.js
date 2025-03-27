const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)

}).then(function(){
    console.log("async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "chai",email: "chai@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Tanuj", password:"123"})
        }
        else{
            reject('Error: Something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;

}).then((username)=>{
    console.log(username);

}).catch(function(error){
    console.log(error);

}).finally(()=>console.log("The 4th promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Javascript",password: "1234"})

        } else{
            reject('Error: JS went went wrong!')
        }
    },1000)
})

// async function consumePromiseFive(){
//     try {
//         const reponse = await promiseFive
//         console.log(reponse);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()

//   *************** async format**************
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response)
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }

// getAllUsers();


//**************by then method*****************//

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => console.log(error))