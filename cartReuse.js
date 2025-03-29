window.onload=function(){
    showsignup();
}
   


const userIcon=document.getElementById("cart-icon")
const overlay=document.getElementById("overlay")
const loginContainer=document.getElementById("login-container")
   
const loggedUsers=JSON.parse(localStorage.getItem("loggedUsers"))
// if(loggedUsers){
//     updateProfile(loggedUsers)
// }

userIcon.addEventListener("click",function(){
//    if(loggedUsers){
//         return;
//     }
   
    overlay.style.display="block"
    loginContainer.style.display="block";


})




//login page
function showsignup(){
    //hiding sign up page
    document.getElementById("sign-up").style.display="none";
    document.getElementById("sign-up-btn").style.display="none";
    document.getElementById("sign-up-text").style.display="none";
    document.getElementById("signupTitle").style.display="none";
    clearField();
    //displaying login page
    document.getElementById("sign-in").style.display="block";
    document.getElementById("sign-in-btn").style.display="block";
    document.getElementById("sign-in-text").style.display="block";
    document.getElementById("loginTitle").style.display="block"

}
//signup page

function showlogin(){
    clearField();
    
    document.getElementById("sign-up").style.display="block";
    document.getElementById("sign-up-btn").style.display="block";
    document.getElementById("sign-up-text").style.display="block";
    document.getElementById("signupTitle").style.display="block";
    document.getElementById("sign-in").style.display="none";
    document.getElementById("sign-in-btn").style.display="none";
    document.getElementById("sign-in-text").style.display="none";
    document.getElementById("loginTitle").style.display="none"
    document.getElementById("ProfileTitle").style.display="none";
    document.getElementById("loginEmail").value="";
document.getElementById("loginPassword").value="";
    document.getElementById("loginError").textContent="";
 



}

//select all element required
const body=document.body;
const SignupBtn=document.getElementById("sign-up-btn")
const SigninBtn=document.getElementById("sign-in-btn")
const logoutBtn=document.getElementById("logout")
//images
const image =document.getElementById("img-card")
const profileImage=document.getElementById("profileImg")

//sign up function
function signup(){
    const name =document.getElementById("username").value.trim();
    const email =document.getElementById("email").value.trim();
    const password =document.getElementById("pass").value.trim();
    const confirmpassword =document.getElementById("passconfirm").value.trim();
    const error =document.getElementById("signupError")

    if(!name||!email||!password||!confirmpassword){
        error.textContent="Pls Enter all fields!";
        // alert("pls fill all fields!")
        return;
    }
    //email validation
    if(!email.endsWith("@gmail.com")){
        error.textContent="Enter a valid Email id!";
        return;
    }
    if(password.length<6){
        error.textContent="password must be atleast 6 digits";
        // alert("password must be atleast 6 digits ")
        return;
    }
 if(password!==confirmpassword){
    error.textContent="passwords do not match";
        // alert("passwords do not match")
        return; 
    }
   //to check email is already registered
let user=JSON.parse(localStorage.getItem('user'))||[];
console.log(user)
if(user.some(user=>user.email===email)){
    error.textContent="Email already registered!";
    return;

}


user.push({name,email,password});
console.log(user)
localStorage.setItem('user',JSON.stringify(user)) //it stores the users data in local storage 

alert("sign up succesfully pls login!")

showsignup();
document.getElementById("loginEmail").value=email;
document.getElementById("loginPassword").value=password;

// document.getElementById("loginEmail").value=email;
// document.getElementById("loginPassword").value=password;
}
//login function
function login(){
    const email =document.getElementById("loginEmail").value.trim();
    const password =document.getElementById("loginPassword").value.trim();
    const error =document.getElementById("loginError")
    let user=JSON.parse(localStorage.getItem('user'))||[];
    const users=user.find(u=>u.email===email&&u.password===password)
    if(!email||!password){
        error.textContent="Pls Enter all fields!";
        return;
    }

    if(!email.endsWith("@gmail.com")){
        error.textContent="Enter a valid Email id!";
        return;
    }
    console.log(users)
    if(users){
        localStorage.setItem('loggedUsers',JSON.stringify(users))
        overlay.style.display = "none";
        loginContainer.style.display="none"
        showNotification(" ✔ login Successfully!")

    
    }
    else{
        error.textContent="Invalid Username or Password"
    }
  
   
      error.textContent=""
  
    
}
function showNotification(msg){
    setTimeout(()=>{
        const notify=document.getElementById("notification")
        notify.textContent=msg;
        notify.classList.add("show")
        setTimeout(()=>{
            notify.classList.remove("show")
        },4000)
      
    },1000)
  
   
   
}

function clearField(){
    document.getElementById("username").value=""
    document.getElementById("email").value=""
    document.getElementById("pass").value=""
    document.getElementById("passconfirm").value=""
    document.getElementById("loginEmail").value=""
    document.getElementById("loginPassword").value=""
    document.getElementById("signupError").textContent=""
    
    document.getElementById("loginError").textContent="";
   
}
function closeLogin(){
     document.getElementById("overlay").style.display = "none";
        loginContainer.style.display="none"
}