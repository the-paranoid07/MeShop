const firstPage = document.querySelector(".main-container");
const signupForm = document.getElementById("signup-form");
const login = document.getElementById("login");
const signup = document.getElementById("signup");
const signUpContainer = document.getElementById("sign-up-container");
const signInContainer = document.getElementById("sign-in-container");
console.log(signup)

login.addEventListener("click",(e)=>{
    // e.preventDefault();
    // firstPage.style.display = "none";
    // signInContainer.style.display = "block"
   
    window.location.href = "signin.html";
    
})

signup.addEventListener("click",(e)=>{
    // e.preventDefault();
    // firstPage.style.display = "none";
    // signUpContainer.style.display = "block"
    window.location.href = "signup.html";
    
})

//saving data on signup
function handleSubmit(event) {
    event.preventDefault();
  
    const form = event.target;
    const formData = new FormData(form);

    //checking password and confirm password match

    if(formData.get("password") !== formData.get("confirmPassword")){
        alert("Password does not match");
        return;
    }
  
    const user = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
  
    // Retrieve the existing users array from local storage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  
    // Add the new user to the array
    existingUsers.push(user);
  
    // Store the updated users array back into local storage
    localStorage.setItem("users", JSON.stringify(existingUsers));
  
    // Clear the form fields after submission
   // form.reset();
    window.location.href = "signin.html";
  }

  //checking if user exist
  function handleSignIn(event) {
    event.preventDefault();
  
    const form = event.target;
    const formData = new FormData(form);
  
    const email = formData.get("email");
    const password = formData.get("password");
  
    // Retrieve the existing users array from local storage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    
    let currentUser={};
    // Check if the user exists
    let userExists = false;
    // const userExists = existingUsers.some(user =>user.email === email && user.password === password )


    existingUsers.forEach(user=>{
        if(user.email === email && user.password === password){
            userExists = true;
            currentUser=user;
        }
    })
console.log(userExists)
    if (userExists) {
      alert("Sign in successful!");
      // You can redirect the user to another page or perform other actions here
      window.location.href = "./shop/index.html";
      sessionStorage.setItem("currentUser",JSON.stringify(currentUser))
    } else {
      alert("Invalid email or password. Please try again.");
    }
  
    // Clear the form fields after submission
    form.reset();
  }
  







// signupForm.addEventListener("submit",(event) => {
    
// })
