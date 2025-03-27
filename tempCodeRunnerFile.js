 user(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}
user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const tea = new user("tea","tea@gamil.com","123");

console.log(tea.encryptPassword)
console.log(t