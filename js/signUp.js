let nameSignup = document.getElementById("nameSignup");
let emailSignup =document.getElementById("emailSignup");
let signupPassword =document.getElementById("signupPassword");
let signUpBtn=document.getElementById("signUpBtn");
let form = document.querySelector("form");
let alertSig =document.getElementById("alertSig");
let emailex = document.getElementById("emailex")
let usersList = [];

// submit form 
form.addEventListener("submit",function(e){
        e.preventDefault(); })
    
//validtion Inputs
let regName =/^[a-zA-Z]{3,30}$/
let regEmail =/^[a-zA-Z]{3,30}@[A-Za-z]{3,10}\.[a-zA-Z]{3,20}$/
let regPass =/^\w{4,50}$/

nameSignup.addEventListener("input",function(){
    validation('nameSignup')
})
emailSignup.addEventListener("input",function(){
validation('emailSignup')
})
signupPassword.addEventListener("input",function(){
    validation('signupPassword')
})



function validation(input){
let myE= document.getElementById(input)
let testInput =myE.value;
  let regexS = {
    nameSignup: /^[a-zA-Z]{3,30}$/,
    emailSignup:/^[a-zA-Z]{3,30}@[A-Za-z]{3,10}\.[a-zA-Z]{3,20}$/,
    signupPassword:/^\w{4,50}$/,
  }

  if(regexS[input].test(testInput)){
      myE.classList.add("is-valid")
        myE.classList.remove("is-invalid")
        alertSig.classList.replace("d-block","d-none")

      return true;
      }else{
        myE.classList.add("is-invalid")
        myE.classList.remove("is-valid")
      
        alertSig.classList.replace("d-none","d-block")
      }

}


  
  
signUpBtn.addEventListener("click",function(){
add()
  
}
)



if(JSON.parse(localStorage.getItem("allUser"))){
  usersList = JSON.parse(localStorage.getItem("allUser"))
}



function add(){
  if (nameSignup.value==""||emailSignup.value==""||signupPassword.value==""
  ) {
    alertSig.classList.remove("d-none")
     emailex.classList.add("d-none")
  }
 else{
  alertSig.classList.add("d-none")

    
if(exsist()){
   let user_reg ={
      name:nameSignup.value,
       email:emailSignup.value,
     password:signupPassword.value,
 }
 console.log(user_reg);
    usersList.push(user_reg);
   localStorage.setItem("allUser",JSON.stringify(usersList))
  clear()
  emailex.classList.add("d-none")
  window.open("../index.html")


    }else{
      emailex.classList.remove("d-none")

    }
  }}
    
function clear(){
  nameSignup.value="";
  emailSignup.value="";
signupPassword.value="";
}












function exsist(){
  for(let i= 0; i<usersList.length;i++){
    if(usersList[i].email==emailSignup.value){
      emailex.classList.add("d-none")

      return false

    }
  }

  emailex.classList.remove("d-none")

  return true

}