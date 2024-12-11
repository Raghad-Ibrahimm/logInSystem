let emailLogin = document.getElementById("emailLogin")
let PasswordLogin =document.getElementById("PasswordLogin")
let btn =document.getElementById("btn")
if(localStorage.getItem("allUser")){
    usersList=JSON.parse(localStorage.getItem("allUser"))
}

console.log(usersList);


btn.addEventListener("click",function(){
    if(ISincLoud()){
        window.open("../page/home.html")
      }else{
        alert("Email is not exsist")
      }
})





function ISincLoud(){
for(let i= 0; i<usersList.length;i++){
if(usersList[i].email==emailLogin.value&&usersList[i].password==PasswordLogin.value){
    localStorage.setItem("username",usersList[i].name)
    return true
}
}return false
}
