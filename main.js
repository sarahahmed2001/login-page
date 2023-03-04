var home =document.getElementById("home")
var register  =document.getElementById("register")
var form  =document.querySelector(".form-control")
var loginemail=document.getElementById("email-log")
var loginpass=document.getElementById("pass-log")
var regName=document.getElementById("name-reg")
var regPass=document.getElementById("pass-reg")
var regEmail=document.getElementById("email-reg")
var signUp = document.getElementById("reg-button");
var warning=document.querySelector(".warning");
var success=document.querySelector(".success")
var loginButton  =document.querySelector(".login-button")
var welcome =document.querySelector("#welcome")
var users =[];
if (localStorage.getItem("login") == null) {
    users = [];
}
else {
    users = JSON.parse(localStorage.getItem("login"));
 
}


var username = localStorage.getItem('name')
if (welcome!=null) {
    welcome.innerHTML = "Welcome " + username
}
function addUser(){
 
    if (regEmail.value==""||regName.value==""||regPass.value==""){
        warning.style.display="block"
        success.style.display="none"
       
    }
    else{ 
       
        if (ifExsist()==false||users.length==0){
            console.log(ifExsist())
            warning.style.display="none"
            success.style.display="block"
            var user = {
                name: regName.value,
                email: regEmail.value,
                pass: regPass.value,
                 }
                 users.push(user);

                 localStorage.setItem("login", JSON.stringify(users))
        }
        else{
            warning.style.display="block"
            success.style.display="none"
  warning.innerHTML="email already exists";
    }
    }
}

function ifExsist(){
    var bool=false ;
    for(var i=0; i<users.length; i++){
 
 if (users[i].email==regEmail.value){
   
    bool= true;
    }
 
}
return bool;
}

function loginCheck(){
var found=0;

    for(var i=0; i<users.length; i++){
   
 if (users[i].email==loginemail.value){
    if (users[i].pass==loginpass.value){
    
      localStorage.setItem("name",users[i].name)
      window.location.href ="home.html"
         found=1;
    
    }
    }
  
    }
    if (found==0){
     if (isempty()==true){
       
        warning.style.display="block"
        warning.innerHTML="All inputs is required"
     }
     else{ 
     warning.style.display="block"
        warning.innerHTML="incorrect email or password"
     }
    }
   
}
function isempty(){
    var bool=false ;
    if (loginemail.value==""||loginpass.value==""){
       bool=true
       
    }  
    return bool
}

